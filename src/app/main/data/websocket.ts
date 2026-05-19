import * as dm from "../../common/data/macros";
import * as l from "../../common/logging";
import * as u from "../../common/uri";
import * as cf from "../../config";
import * as ws from "../../util/websocket";
import * as rx from "beicon.v2.core";
import * as ptk from "../types/ptok";

l.setLevel("error");

// Export send! function from websocket module
// @ts-ignore
dm.export(ws.send!);

let wsConn: any = null;

function prepareUri(params: any): any {
  const base = u.join(cf.publicUri, "ws/notifications", {
    query: u.mapToQueryString(params)
  });

  const result = { ...base };

  if (base.scheme === "https") {
    result.scheme = "wss";
  } else if (base.scheme === "http") {
    result.scheme = "ws";
  }

  return result;
}

export function sendMessage(message: any): ptk.Event {
  return ptk.reify("send-message", ptk.EffectEvent, {
    effect(_state, _stream, _action) {
      if (wsConn) {
        ws.send!(wsConn, message);
      }
    }
  });
}

export function initialize_(): ptk.Event {
  return ptk.reify("initialize", ptk.WatchEvent, {
    watch(state, stream, _action) {
      l.trace({ hint: "initialize", fn: "watch" });

      const sid = state.sessionId;
      const uri = prepareUri({ sessionId: sid });
      const ws_ = ws.create(uri);

      wsConn = ws_;

      const stopper = rx.merge(
        rx.filter(ptk.isType("finalize"), stream),
        rx.filter(ptk.isType("initialize"), stream)
      );

      return rx.merge(
        rx.of(state => ({
          ...state,
          wsConn
        })),
        rx.from(ws.getRcvStream(ws_))
          .pipe(
            rx.filter(ws.isMessageEvent),
            rx.map(payload => payload),
            rx.map(payload => ptk.dataEvent("message", payload))
          ),
        rx.from(ws.getRcvStream(ws_))
          .pipe(
            rx.filter(ws.isOpenedEvent),
            rx.map(() => ptk.dataEvent("opened", {}))
          )
      ).pipe(
        rx.takeUntil(stopper)
      );
    }
  });
}

export function finalize_(): ptk.Event {
  return ptk.reify("finalize", ptk.UpdateEvent, {
    update(state: any) {
      const { wsConn, ...rest } = state;
      return rest;
    },
    effect(_state, _stream, _action) {
      l.trace({ hint: "event:finalize", fn: "effect" });
      if (wsConn) {
        ws.close!(wsConn);
      }
    }
  });
}
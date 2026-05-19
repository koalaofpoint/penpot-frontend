// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { useCallback, useState } from "react";
import * as stl from "app.main.style";
import * as dm from "app.common.data.macros";
import * as cf from "app.config";
import * as ev from "app.main.data.event";
import * as rt from "app.main.router";
import * as st from "app.main.store";
import { DropdownMenuItem } from "app.main.ui.components.dropdown-menu";
import { Button } from "app.main.ui.ds.buttons.button";
import { Icon } from "app.main.ui.ds.foundations.assets.icon";
import { Cta } from "app.main.ui.ds.product.cta";
import * as dom from "app.util.dom";
import * as i18n from "app.util.i18n";
import { tr } from "app.util.i18n";
import * as kbd from "app.util.keyboard";
import * as u from "lambdaisland.uri";
import * as ptk from "potok.v2.core";

function getSubscriptionType(subscription: any): string {
  if (subscription && subscription.type && !["unpaid", "canceled"].includes(subscription.status)) {
    return subscription.type;
  }
  return "professional";
}

interface CtaPowerUpProps {
  topTitle: string;
  topDescription: string;
  bottomDescription?: string;
  bottomButton?: string;
  bottomButtonHref?: string;
  hasDropdown?: boolean;
  isHighlighted?: boolean;
}

function CtaPowerUp(props: CtaPowerUpProps) {
  const [showData, setShowData] = useState(false);

  const handleClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowData((prev) => !prev);
  }, []);

  const handleNavigation = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    st.emit!(rt.navRaw({ href: props.bottomButtonHref }));
  }, [props.bottomButtonHref]);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <div
      className={cssClass({ "cta-power-up": true, highlighted: props.isHighlighted })}
      onClick={handleClick}
    >
      <button
        className={cssClass({ "cta-top-section": true, "cta-without-dropdown": !props.hasDropdown })}
      >
        <div className="content">
          <span className="cta-title">{props.topTitle}</span>
          <span className="cta-text" data-testid="subscription-name">{props.topDescription}</span>
        </div>
        {props.hasDropdown && (
          <Icon
            iconId={showData ? "i/arrow-up" : "i/arrow-down"}
            className="icon-dropdown"
            size="s"
          />
        )}
      </button>

      {props.hasDropdown && showData && props.bottomDescription && (
        <div className="cta-bottom-section">
          <span className="content" dangerouslySetInnerHTML={{ __html: props.bottomDescription }} />
        </div>
      )}

      {props.bottomDescription && props.bottomButton && (
        <div className="cta-bottom-section">
          <span className="content">{props.bottomDescription}</span>
          <Button
            variant="primary"
            type="button"
            className="cta-bottom-button"
            onClick={handleNavigation}
          >
            {props.bottomButton}
          </Button>
        </div>
      )}
    </div>
  );
}

interface SubscriptionSidebarProps {
  profile: any;
}

function SubscriptionSidebar(props: SubscriptionSidebarProps) {
  const subscription = props.profile?.props?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const subscriptionIsTrial = subscription?.status === "trialing";
  const subscriptionHref = u.join(cf.publicUri, "#/settings/subscriptions");

  switch (subscriptionType) {
    case "professional":
      return (
        <CtaPowerUp
          topTitle={tr("subscription.dashboard.power-up.your-subscription")}
          topDescription={tr("subscription.dashboard.power-up.professional.top-title")}
          bottomDescription={tr("subscription.dashboard.power-up.professional.bottom-description")}
          bottomButton={tr("subscription.dashboard.power-up.professional.bottom-button")}
          bottomButtonHref={subscriptionHref}
          hasDropdown={false}
          isHighlighted={true}
        />
      );

    case "unlimited":
      if (subscriptionIsTrial) {
        return (
          <CtaPowerUp
            topTitle={tr("subscription.dashboard.power-up.your-subscription")}
            topDescription={tr("subscription.dashboard.power-up.trial.top-title")}
            bottomDescription={tr("subscription.dashboard.power-up.trial.bottom-description", subscriptionHref)}
            hasDropdown={true}
            isHighlighted={false}
          />
        );
      }
      return (
        <CtaPowerUp
          topTitle={tr("subscription.dashboard.power-up.your-subscription")}
          topDescription={tr("subscription.dashboard.power-up.unlimited-plan")}
          bottomDescription={tr("subscription.dashboard.power-up.unlimited.bottom-text", subscriptionHref)}
          hasDropdown={true}
          isHighlighted={false}
        />
      );

    case "enterprise":
      if (subscriptionIsTrial) {
        return (
          <CtaPowerUp
            topTitle={tr("subscription.dashboard.power-up.your-subscription")}
            topDescription={tr("subscription.dashboard.power-up.enterprise-trial.top-title")}
            hasDropdown={false}
            isHighlighted={false}
          />
        );
      }
      return (
        <CtaPowerUp
          topTitle={tr("subscription.dashboard.power-up.your-subscription")}
          topDescription={tr("subscription.dashboard.power-up.enterprise-plan")}
          hasDropdown={false}
          isHighlighted={false}
        />
      );

    default:
      return null;
  }
}

interface TeamProps {
  isOwner: boolean;
  team: any;
}

function Team(props: TeamProps) {
  const subscription = props.team?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const subscriptionIsTrial = subscription?.status === "trialing";

  const goToManageSubscription = useCallback(() => {
    st.emit!(ptk.event(ev.event, {
      name: "open-subscription-management",
      origin: "dashboard",
      section: "team-settings"
    }));
    const href = rt.getCurrentHref();
    const encodedHref = rt.encodeUrl(href);
    const newHref = `payments/subscriptions/show?returnUrl=${encodedHref}`;
    st.emit!(rt.navRaw({ href: newHref }));
  }, []);

  return (
    <div className="team">
      <div className="team-label">
        {tr("subscription.dashboard.team-plan")}
      </div>
      <span className="team-text">
        {subscriptionType === "professional" && tr("subscription.settings.professional")}
        {subscriptionType === "unlimited" && (subscriptionIsTrial ? tr("subscription.settings.unlimited-trial") : tr("subscription.settings.unlimited"))}
        {subscriptionType === "enterprise" && tr("subscription.settings.enterprise")}
      </span>
      {props.isOwner && subscriptionType !== "professional" && (
        <button
          className="manage-subscription-link"
          onClick={goToManageSubscription}
          data-testid="manage-subscription-link"
        >
          {tr("subscription.settings.manage-your-subscription")}
        </button>
      )}
    </div>
  );
}

interface MenuTeamIconProps {
  subscriptionType: string;
}

function MenuTeamIcon(props: MenuTeamIconProps) {
  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <span className="subscription-icon-wrapper">
      <Icon
        iconId={props.subscriptionType === "unlimited" ? "i/character-u" : "i/character-e"}
        className="subscription-icon"
        size="s"
        title={props.subscriptionType === "unlimited" ? tr("subscription.dashboard.power-up.unlimited-plan") : tr("subscription.dashboard.power-up.enterprise-plan")}
        data-testid="subscription-icon"
      />
    </span>
  );
}

interface MainMenuPowerUpProps {
  closeSubMenu?: () => void;
}

function MainMenuPowerUp(props: MainMenuPowerUpProps) {
  const goToSubscription = useCallback(() => {
    st.emit!(rt.nav({ section: "settings-subscription" }));
  }, []);

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <DropdownMenuItem
      className={cssClass({ "menu-item": true })}
      onClick={goToSubscription}
      onKeyDown={(event: any) => {
        if (kbd.enter(event)) {
          goToSubscription();
        }
      }}
      onPointerEnter={props.closeSubMenu}
      id="file-menu-power-up"
    >
      <span className="item-name">{tr("subscription.workspace.header.menu.option.power-up")}</span>
    </DropdownMenuItem>
  );
}

function MembersCta() {
  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <Cta className={cssClass({ "members-cta": true })} title={tr("subscription.dashboard.unlimited-members-extra-editors-cta-title")}>
      <span className="cta-message" dangerouslySetInnerHTML={{ __html: tr("subscription.dashboard.unlimited-members-extra-editors-cta-text") }} />
    </Cta>
  );
}

interface DashboardCtaProps {
  profile: any;
}

function DashboardCta(props: DashboardCtaProps) {
  const subscription = props.profile?.props?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const goToSubscription = u.join(cf.publicUri, "#/settings/subscriptions");
  const seats = subscription?.quantity || 0;
  const editors = subscription?.editors?.length || 0;

  let ctaTitle = "";
  if (subscriptionType === "professional") {
    ctaTitle = tr("subscription.dashboard.professional-dashboard-cta-title", editors);
  } else if (subscriptionType === "unlimited") {
    ctaTitle = tr("subscription.dashboard.unlimited-dashboard-cta-title", seats, editors);
  }

  let ctaMessage = "";
  if (subscriptionType === "professional") {
    ctaMessage = tr("subscription.dashboard.professional-dashboard-cta-upgrade-owner", goToSubscription);
  } else if (subscriptionType === "unlimited") {
    ctaMessage = tr("subscription.dashboard.unlimited-dashboard-cta-upgrade-owner", goToSubscription);
  }

  const cssClass = (classes: Record<string, boolean>): string => {
    return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
  };

  return (
    <Cta className={cssClass({ "dashboard-cta": true })} title={ctaTitle}>
      <span className="cta-message" dangerouslySetInnerHTML={{ __html: ctaMessage }} />
    </Cta>
  );
}

function showSubscriptionDashboardBanner(profile: any): boolean {
  const subscription = profile?.props?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const seats = subscription?.quantity || 0;
  const editors = subscription?.editors?.length || 0;

  return (
    (subscriptionType === "professional" && editors > 8) ||
    (subscriptionType === "unlimited" &&
      ((seats < 25 && (editors - seats) >= 4) ||
       (seats < 25 && editors >= 25 && editors > seats)))
  );
}

function showSubscriptionMembersBanner(team: any, profile: any): boolean {
  const subscription = team?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const seats = subscription?.seats || 0;
  const editors = team?.permissions?.isOwner ? 0 : (profile?.props?.subscription?.editors?.length || 0);
  const isOwner = team?.permissions?.isOwner;

  return (
    isOwner &&
    subscriptionType === "unlimited" &&
    seats < 25 &&
    (editors - seats) >= 4
  );
}

export {
  getSubscriptionType,
  CtaPowerUp,
  SubscriptionSidebar,
  Team,
  MenuTeamIcon,
  MainMenuPowerUp,
  MembersCta,
  DashboardCta,
  showSubscriptionDashboardBanner,
  showSubscriptionMembersBanner
};
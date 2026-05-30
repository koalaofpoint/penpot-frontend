;; This Source Code Form is subject to the terms of the Mozilla Public
;; License, v. 2.0. If a copy of the MPL was not distributed with this
;; file, You can obtain one at http://mozilla.org/MPL/2.0/.
;;
;; Copyright (c) KALEIDOS INC

(ns app.main.ui.routes
  (:require
   [app.common.data.macros :as dm]
   [app.common.uri :as u]
   [app.common.uuid :as uuid]
   [app.config :as cf]
   [app.main.data.team :as dtm]
   [app.main.errors :as errors]
   [app.main.repo :as rp]
   [app.main.router :as rt]
   [app.main.store :as st]
   [app.util.storage :as storage]
   [beicon.v2.core :as rx]
   [cuerdas.core :as str]
   [potok.v2.core :as ptk]))

(def routes
  [["/auth"
    ["/login"             :auth-login]
    ["/register"          :auth-register]
    ["/register/validate" :auth-register-validate]
    ["/register/success"  :auth-register-success]
    ["/recovery/request"  :auth-recovery-request]
    ["/recovery"          :auth-recovery]
    ["/verify-token"      :auth-verify-token]]

   ["/settings"
    ["/profile"       :settings-profile]
    ["/password"      :settings-password]
    ["/feedback"      :settings-feedback]
    ["/options"       :settings-options]
    ["/subscriptions" :settings-subscription]
    ["/access-tokens" :settings-access-tokens]
    ["/notifications" :settings-notifications]]

   ["/frame-preview" :frame-preview]

   ["/view" :viewer]

   ["/view/:file-id" :viewer-legacy]

   (when *assert*
     ["/debug/icons-preview" :debug-icons-preview])

   (when *assert*
     ["/debug/playground" :debug-playground])

   ;; Used for export
   ["/render-sprite/:file-id" :render-sprite]

   ["/dashboard"
    ["/members"              :dashboard-members]
    ["/invitations"          :dashboard-invitations]
    ["/webhooks"             :dashboard-webhooks]
    ["/settings"             :dashboard-settings]
    ["/recent"               :dashboard-recent]
    ["/search"               :dashboard-search]
    ["/fonts"                :dashboard-fonts]
    ["/fonts/providers"      :dashboard-font-providers]
    ["/libraries"            :dashboard-libraries]
    ["/files"                :dashboard-files]
    ["/deleted" :dashboard-deleted]]

   ["/dashboard/team/:team-id"
    ["/members"              :dashboard-legacy-team-members]
    ["/invitations"          :dashboard-legacy-team-invitations]
    ["/webhooks"             :dashboard-legacy-team-webhooks]
    ["/settings"             :dashboard-legacy-team-settings]
    ["/projects"             :dashboard-legacy-projects]
    ["/search"               :dashboard-legacy-search]
    ["/fonts"                :dashboard-legacy-fonts]
    ["/fonts/providers"      :dashboard-legacy-font-providers]
    ["/libraries"            :dashboard-legacy-libraries]
    ["/projects/:project-id" :dashboard-legacy-files]]

   ["/workspace" :workspace]
   ["/workspace/:project-id/:file-id" :workspace-legacy]])


(defn- store-session-params
  [{:keys [template plugin]}]
  (binding [storage/*sync* true]
    (when (some? template)
      (swap! storage/session assoc
             :template template))
    (when (some? plugin)
      (swap! storage/session assoc
             :plugin-url plugin))))

(defn on-navigate
  [router path send-event-info?]
  ;; Normalize path: the Html5History token transformer should strip the
  ;; base path prefix, but in some cases (e.g. initial getToken call) it
  ;; may return the raw pathname. We strip it here as a safeguard.
  (let [public-uri-str   (dm/str cf/public-uri)
        prefix-path      (:path (u/uri public-uri-str))
        path             (if (and (not= prefix-path "/")
                                  (str/starts-with? path prefix-path))
                           (subs path (dec (count prefix-path)))
                           path)
        location         (.-location js/document)
        [base-path qs]   (str/split path "?" 2)
        valid-location?  (str/starts-with? public-uri-str (.-origin location))
        match            (rt/match router path)
        empty-path?      (or (= base-path "") (= base-path "/"))
        query-params     (u/query-string->map qs)]

    (cond
      (not valid-location?)
      (st/emit! (rt/assign-exception {:type :not-found}))

      (some? match)
      (st/emit! (rt/navigated match send-event-info?))

      :else
      ;; We just recheck with an additional profile request; this
      ;; avoids some race conditions that causes unexpected redirects
      ;; on invitations workflows (and probably other cases).
      (let [profile-ob (rp/cmd! :get-profile)]
        (rx/subs!
         (fn [profile]
           (if (= (:id profile) uuid/zero)
             (do
               (store-session-params query-params)
               (st/emit! (rt/nav :auth-login)))
             (let [teams-ob (rp/cmd! :get-teams {})]
               (rx/subs!
                (fn [teams]
                  (let [team-ids (into #{} (map :id teams))]
                    (if empty-path?
                      (let [last-team-id (dtm/get-last-team-id)
                            team-id (if (contains? team-ids last-team-id)
                                      last-team-id
                                      (:default-team-id profile))]
                        (st/emit! (rt/nav :dashboard-recent
                                          (assoc query-params :team-id team-id))))
                      (st/emit! (rt/assign-exception {:type :not-found})))))
                (fn [cause]
                  (errors/on-error cause))
                teams-ob))))
         (fn [cause]
           (errors/on-error cause))
         profile-ob)))))

(defn init-routes
  []
  (ptk/reify ::init-routes
    ptk/WatchEvent
    (watch [_ _ _]
      (rx/of (rt/initialize-router routes)
             (rt/initialize-history on-navigate)))))

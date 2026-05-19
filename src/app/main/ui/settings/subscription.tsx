// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useMemo, useRef, useState } from "react";
import * as dm from "@app/common/data.macros";
import * as sm from "@app/common/schema";
import * as ct from "@app/common/time";
import * as da from "@app/main/data/auth";
import * as ev from "@app/main/data/event";
import * as modal from "@app/main/data/modal";
import * as refs from "@app/main/refs";
import * as rt from "@app/main/router";
import { emit } from "@app/main/store";
import * as fm from "@app/main/ui/components/forms";
import { getSubscriptionType } from "@app/main/ui/dashboard/subscription";
import { Button } from "@app/main/ui/ds/buttons/button";
import { Icon } from "@app/main/ui/ds/foundations/assets/icon";
import { RawSvg } from "@app/main/ui/ds/foundations/assets/raw-svg";
import { BadgeNotification } from "@app/main/ui/notifications/badge";
import * as dom from "@app/util/dom";
import { tr, c } from "@app/util/i18n";
import * as i18n from "@app/util/i18n";

interface PlanCardProps {
  cardTitle: string;
  cardTitleIcon?: string;
  priceValue?: string;
  pricePeriod?: string;
  benefitsTitle?: string;
  benefits: string[];
  ctaText?: string;
  ctaLink?: () => void;
  ctaTextTrial?: string;
  ctaLinkTrial?: () => void;
  ctaTextWithIcon?: string;
  ctaLinkWithIcon?: () => void;
  editors?: number;
  recommended?: boolean;
  showButtonCta?: boolean;
}

export function PlanCard(props: PlanCardProps) {
  const {
    cardTitle,
    cardTitleIcon,
    priceValue,
    pricePeriod,
    benefitsTitle,
    benefits,
    ctaText,
    ctaLink,
    ctaTextTrial,
    ctaLinkTrial,
    ctaTextWithIcon,
    ctaLinkWithIcon,
    editors,
    recommended,
    showButtonCta
  } = props;

  return (
    <div className={`plan-card ${recommended ? "plan-card-highlight" : ""}`}>
      <div className="plan-card-header">
        <div className="plan-card-title-container">
          {cardTitleIcon && (
            <Icon iconId={cardTitleIcon} className="plan-title-icon" size="s" />
          )}
          <h4 className="plan-card-title">{cardTitle}</h4>
          {recommended && (
            <BadgeNotification content={tr("subscription.settings.recommended")} size="small" isFocus />
          )}
          {editors && (
            <span className="plan-editors">{tr("subscription.settings.editors", editors)}</span>
          )}
        </div>
        {priceValue && pricePeriod && (
          <div className="plan-price">
            <span className="plan-price-value">{priceValue}</span>
            <span className="plan-price-period"> / {pricePeriod}</span>
          </div>
        )}
      </div>
      {benefitsTitle && <h5 className="benefits-title">{benefitsTitle}</h5>}
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={dm.str(benefit, "-", index)} className="benefit">- {benefit}</li>
        ))}
      </ul>
      {ctaLinkWithIcon && ctaTextWithIcon && (
        <button className="cta-button more-info" onClick={ctaLinkWithIcon}>
          {ctaTextWithIcon}
          <Icon iconId="open-link" size="s" />
        </button>
      )}
      {ctaLink && ctaText && !showButtonCta && (
        <button
          className={`cta-button ${!ctaLinkTrial ? "bottom-link" : ""}`}
          onClick={ctaLink}
        >
          {ctaText}
        </button>
      )}
      {ctaLink && ctaText && showButtonCta && (
        <Button
          variant="primary"
          type="button"
          className={!ctaLinkTrial ? "bottom-button" : ""}
          onClick={ctaLink}
        >
          {ctaText}
        </Button>
      )}
      {ctaLinkTrial && ctaTextTrial && (
        <button className="cta-button bottom-link" onClick={ctaLinkTrial}>
          {ctaTextTrial}
        </button>
      )}
    </div>
  );
}

function makeManagementFormSchema(minEditors: number) {
  return sm.schema({
    title: "SeatsForm",
    fields: {
      minMembers: sm.number({ min: minEditors, max: 9999 }),
      redirectToPaymentDetails: "boolean"
    }
  });
}

interface SubscribeManagementDialogProps {
  subscriptionType: string;
  currentSubscription: any;
  editors: any[];
  subscribeToTrial: boolean;
}

export function SubscribeManagementDialog(props: SubscribeManagementDialogProps) {
  const {
    subscriptionType,
    currentSubscription,
    editors,
    subscribeToTrial
  } = props;

  const [unlimitedModalStep, setUnlimitedModalStep] = useState(1);

  const subscriptionName = subscribeToTrial
    ? (subscriptionType === "unlimited"
      ? tr("subscription.settings.unlimited-trial")
      : tr("subscription.settings.enterprise-trial"))
    : (subscriptionType === "professional"
      ? tr("subscription.settings.professional")
      : subscriptionType === "unlimited"
        ? tr("subscription.settings.unlimited")
        : tr("subscription.settings.enterprise"));

  const minEditors = editors?.length || 1;

  const initial = useMemo(() => ({
    minMembers: minEditors,
    redirectToPaymentDetails: false
  }), [minEditors]);

  const schema = useMemo(() => makeManagementFormSchema(minEditors), [minEditors]);

  const form = fm.useForm({ schema, initial });

  const submitInProgress = useRef(false);

  const subscribeToUnlimited = useCallback((minMembers: number, addPaymentDetails: boolean) => {
    if (submitInProgress.current) return;
    submitInProgress.current = true;

    const returnUrl = rt.getCurrentHref();
    const encodedReturnUrl = rt.encodeUrl(returnUrl);
    const href = dm.str(
      "payments/subscriptions/create?type=unlimited&show=",
      addPaymentDetails,
      "&quantity=",
      minMembers,
      "&returnUrl=",
      encodedReturnUrl
    );
    form.reset();
    emit(
      ev.event(ev.NAME, "create-trial-subscription", { type: "unlimited", quantity: minMembers }),
      rt.navRaw(href)
    );
  }, [form]);

  const subscribeToEnterprise = useCallback(() => {
    emit(ev.event(ev.NAME, "create-trial-subscription", { type: "enterprise" }));
    const returnUrl = rt.getCurrentHref();
    const href = dm.str("payments/subscriptions/create?type=enterprise&returnUrl=", rt.encodeUrl(returnUrl));
    emit(rt.navRaw(href));
  }, []);

  const handleAcceptDialog = useCallback(() => {
    emit(ev.event(ev.NAME, "open-subscription-management", { origin: "settings", section: "subscription-management-modal" }));
    const currentHref = rt.getCurrentHref();
    const returnUrl = encodeURIComponent(currentHref);
    const href = dm.str("payments/subscriptions/show?returnUrl=", returnUrl);
    emit(rt.navRaw(href));
    modal.hide();
  }, []);

  const handleCloseDialog = useCallback(() => {
    emit(ev.event(ev.NAME, "close-subscription-modal"));
    modal.hide();
  }, []);

  const [showEditorsList, setShowEditorsList] = useState(false);

  const handleClick = useCallback((event: React.MouseEvent) => {
    dom.stopPropagation(event);
    setShowEditorsList((prev) => !prev);
  }, []);

  const onSubmit = useCallback((formData: any) => {
    const cleanData = formData.cleanData;
    const minMembers = cleanData.minMembers;
    const redirect = cleanData.redirectToPaymentDetails;

    if (
      ["unpaid", "canceled"].includes(currentSubscription?.status) ||
      unlimitedModalStep === 2
    ) {
      subscribeToUnlimited(minMembers, redirect);
    } else {
      setUnlimitedModalStep((prev) => prev + 1);
    }
  }, [currentSubscription, unlimitedModalStep, subscribeToUnlimited]);

  const onAddPaymentsClick = useCallback(() => {
    form.update((data: any) => ({ ...data, redirectToPaymentDetails: true }));
  }, [form]);

  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <button className="close-btn" onClick={handleCloseDialog}>
          <Icon iconId="close" size="m" />
        </button>
        <div className="modal-title subscription-title">
          {unlimitedModalStep === 2
            ? tr("subscription.settings.management-dialog.step-2-title")
            : tr("subscription.settings.management.dialog.title", subscriptionName)}
        </div>

        <div className="modal-content">
          {editors?.length && unlimitedModalStep !== 2 && (
            <>
              <p className="editors-text">
                {tr("subscription.settings.management.dialog.currently-editors-title", c(editors.length))}
              </p>
              <button className="cta-button show-editors-button" onClick={handleClick}>
                {tr("subscription.settings.management.dialog.editors")}
                <Icon
                  iconId={showEditorsList ? i18n.arrowUp : i18n.arrowDown}
                  className="icon-dropdown"
                  size="s"
                />
              </button>
              {showEditorsList && (
                <>
                  <p className="editors-text editors-list-warning">
                    {tr("subscription.settings.management.dialog.editors-explanation")}
                  </p>
                  <ul className="editors-list">
                    {editors.map((editor: any) => (
                      <li key={editor.id} className="team-name">- {editor.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}

          {subscriptionType === "professional" &&
           ["unlimited", "enterprise"].includes(currentSubscription?.type) &&
           !["unpaid", "canceled"].includes(currentSubscription?.status) &&
           !subscribeToTrial && (
            <div className="modal-text">
              {tr("subscription.settings.management.dialog.downgrade")}
            </div>
          )}

          {subscriptionType === "unlimited" &&
           (subscribeToTrial || ["unpaid", "canceled"].includes(currentSubscription?.status)) ? (
            <fm.Form onSubmit={onSubmit} className="seats-form" form={form}>
              {unlimitedModalStep === 1 && (
                <>
                  <div className="editors-wrapper">
                    <div className="fields-row">
                      <fm.Input
                        type="number"
                        name="minMembers"
                        showError={false}
                        label=""
                        className="input-field"
                      />
                    </div>
                    <div className="editors-cost">
                      <span className="modal-text-medium">
                        {form.cleanData?.minMembers > 25 && (
                          <i18n.TrHtml
                            className="modal-text-cap"
                            tagName="span"
                            content={tr("subscription.settings.management.dialog.price-month", "175")}
                          />
                        )}
                        <i18n.TrHtml
                          className={form.cleanData?.minMembers > 25 ? "text-strikethrough" : ""}
                          tagName="span"
                          content={tr(
                            "subscription.settings.management.dialog.price-month",
                            String(7 * (form.cleanData?.minMembers || 0))
                          )}
                        />
                      </span>
                      <span className="modal-text-medium">
                        {tr("subscription.settings.management.dialog.payment-explanation")}
                      </span>
                    </div>
                  </div>

                  {form.errors?.minMembers && (
                    <div className="error-message">
                      {tr("subscription.settings.management.dialog.input-error")}
                    </div>
                  )}

                  <div className="unlimited-capped-warning">
                    {tr("subscription.settings.management.dialog.unlimited-capped-warning")}
                  </div>

                  <div className="modal-footer">
                    <div className="action-buttons">
                      <input
                        className="cancel-button"
                        type="button"
                        value={tr("ds.confirm-cancel")}
                        onClick={handleCloseDialog}
                      />
                      <fm.SubmitButton
                        label={["unpaid", "canceled"].includes(currentSubscription?.status)
                          ? tr("subscription.settings.subscribe")
                          : tr("labels.continue")}
                        className="primary-button"
                      />
                    </div>
                  </div>
                </>
              )}

              {unlimitedModalStep === 2 && (
                <>
                  <p className="modal-text-medium">
                    {tr("subscription.settings.management-dialog.step-2-description")}
                  </p>

                  <div className="modal-footer">
                    <div className="action-buttons">
                      <input
                        className="cancel-button"
                        type="submit"
                        value={tr("subscription.settings.management-dialog.step-2-skip-button")}
                      />
                      <input
                        className="primary-button"
                        type="submit"
                        value={tr("subscription.settings.management-dialog.step-2-add-payment-button")}
                        onClick={onAddPaymentsClick}
                      />
                    </div>
                  </div>
                </>
              )}
            </fm.Form>
          ) : (
            <div className="modal-footer">
              <div className="action-buttons">
                <input
                  className="cancel-button"
                  type="button"
                  value={tr("ds.confirm-cancel")}
                  onClick={handleCloseDialog}
                />
                <input
                  className="primary-button"
                  type="button"
                  value={
                    subscribeToTrial || ["unpaid", "canceled"].includes(currentSubscription?.status)
                      ? tr("subscription.settings.start-trial")
                      : tr("labels.continue")
                  }
                  onClick={
                    subscribeToTrial || ["unpaid", "canceled"].includes(currentSubscription?.status)
                      ? subscribeToEnterprise
                      : handleAcceptDialog
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface SubscriptionSuccessDialogProps {
  subscriptionName: string;
}

export function SubscriptionSuccessDialog(props: SubscriptionSuccessDialogProps) {
  const { subscriptionName } = props;

  const profile = useDeref(refs.profile);
  const handleCloseDialog = useCallback(() => {
    emit(ev.event(ev.NAME, "subscription-success"));
    modal.hide();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-dialog subscription-success">
        <button className="close-btn" onClick={handleCloseDialog}>
          <Icon iconId="close" size="m" />
        </button>
        <div className="modal-success-content">
          <div className="modal-start">
            <RawSvg id={profile?.theme === "light" ? "logo-subscription-light" : "logo-subscription"} />
          </div>
          <div className="modal-end">
            <div className="modal-title">
              {tr("subscription.settings.sucess.dialog.title", subscriptionName)}
            </div>
            {subscriptionName !== "professional" && (
              <p className="modal-text-large">
                {tr("subscription.settings.success.dialog.thanks", subscriptionName)}
              </p>
            )}
            <p className="modal-text-large">
              {tr("subscription.settings.success.dialog.description")}
            </p>
            <p className="modal-text-large">
              {tr("subscription.settings.sucess.dialog.footer")}
            </p>
            <div className="success-action-buttons">
              <input
                className="primary-button"
                type="button"
                value={tr("labels.close")}
                onClick={handleCloseDialog}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SubscriptionPageProps {
  profile: any;
}

export function SubscriptionPage(props: SubscriptionPageProps) {
  const { profile } = props;

  const route = useDeref(refs.route);
  const authenticated = da.isAuthenticated(profile);

  const paramsSubscription = route?.params?.query?.subscription;

  const showTrialSubscriptionModal =
    paramsSubscription === "subscription-to-penpot-unlimited" ||
    paramsSubscription === "subscription-to-penpot-enterprise";

  const showSubscriptionSuccessModal =
    paramsSubscription === "subscribed-to-penpot-unlimited" ||
    paramsSubscription === "subscribed-to-penpot-enterprise";

  const successModalIsTrial = route?.params?.query?.trial;

  const subscriptionEditors = profile?.props?.subscription?.editors;
  const subscription = profile?.props?.subscription;
  const subscriptionType = getSubscriptionType(subscription);
  const subscriptionIsTrial = subscription?.status === "trialing";

  const memberSince = ct.formatInst(profile?.createdAt, "d MMMM, yyyy");
  const subscribedSince = ct.formatInst(subscription?.startDate, "d MMMM, yyyy");

  const goToPricingPage = useCallback(() => {
    emit(ev.event(ev.NAME, "explore-pricing-click", { origin: "settings", section: "subscription" }));
    dom.openNewWindow("https://penpot.app/pricing");
  }, []);

  const goToPayments = useCallback(() => {
    emit(ev.event(ev.NAME, "open-subscription-management", { origin: "settings", section: "subscription" }));
    const currentHref = rt.getCurrentHref();
    const returnUrl = encodeURIComponent(currentHref);
    const href = dm.str("payments/subscriptions/show?returnUrl=", returnUrl);
    emit(rt.navRaw(href));
  }, []);

  const openSubscriptionModal = useCallback(
    (subType: string, currentSub: any) => {
      emit(ev.event(ev.NAME, "open-subscription-modal", { origin: "settings:in-app" }));
      emit(
        modal.show("management-dialog", {
          subscriptionType: subType,
          currentSubscription: currentSub,
          editors: subscriptionEditors,
          subscribeToTrial: !subscription?.type
        })
      );
    },
    [subscriptionEditors, subscription?.type]
  );

  React.useEffect(() => {
    dom.setHtmlTitle(tr("subscription.labels"));
  }, []);

  React.useEffect(() => {
    if (!authenticated) return;

    if (showTrialSubscriptionModal) {
      emit(
        ev.event(ev.NAME, "open-subscription-modal", { origin: "settings:from-pricing-page" }),
        modal.show("management-dialog", {
          subscriptionType: paramsSubscription === "subscription-to-penpot-unlimited" ? "unlimited" : "enterprise",
          currentSubscription: subscription,
          editors: subscriptionEditors,
          subscribeToTrial: !subscription?.type
        }),
        rt.nav("settings-subscription", {}, { replace: true })
      );
    } else if (showSubscriptionSuccessModal) {
      emit(
        modal.show("subscription-success", {
          subscriptionName: paramsSubscription === "subscribed-to-penpot-unlimited"
            ? (successModalIsTrial === "true"
              ? tr("subscription.settings.unlimited-trial")
              : tr("subscription.settings.unlimited"))
            : (successModalIsTrial === "true"
              ? tr("subscription.settings.enterprise-trial")
              : tr("subscription.settings.enterprise"))
        }),
        rt.nav("settings-subscription", {}, { replace: true })
      );
    }
  }, [authenticated, showTrialSubscriptionModal, showSubscriptionSuccessModal, successModalIsTrial, subscription, subscriptionEditors, paramsSubscription]);

  return (
    <section className="dashboard-section">
      <div className="dashboard-content">
        <h2 className="title-section">{tr("subscription.labels")}</h2>

        <div className="your-subscription">
          <h3 className="plan-section-title">{tr("subscription.settings.section-plan")}</h3>
          {subscriptionType === "professional" && (
            <PlanCard
              cardTitle={tr("subscription.settings.professional")}
              benefits={[
                tr("subscription.settings.professional.storage-benefit"),
                tr("subscription.settings.professional.autosave-benefit"),
                tr("subscription.settings.professional.teams-editors-benefit")
              ]}
            />
          )}

          {subscriptionType === "unlimited" && (
            subscriptionIsTrial ? (
              <PlanCard
                cardTitle={tr("subscription.settings.unlimited-trial")}
                cardTitleIcon="character-u"
                benefitsTitle={tr("subscription.settings.benefits.all-professional-benefits")}
                benefits={[
                  tr("subscription.settings.unlimited.storage-benefit"),
                  tr("subscription.settings.unlimited.autosave-benefit"),
                  tr("subscription.settings.unlimited.bill")
                ]}
                ctaText={tr("subscription.settings.manage-your-subscription")}
                ctaLink={goToPayments}
                ctaTextTrial={tr("subscription.settings.add-payment-to-continue")}
                ctaLinkTrial={goToPayments}
                editors={profile?.props?.subscription?.quantity}
              />
            ) : (
              <PlanCard
                cardTitle={tr("subscription.settings.unlimited")}
                cardTitleIcon="character-u"
                benefitsTitle={tr("subscription.settings.benefits.all-unlimited-benefits")}
                benefits={[
                  tr("subscription.settings.unlimited.storage-benefit"),
                  tr("subscription.settings.unlimited.autosave-benefit"),
                  tr("subscription.settings.unlimited.bill")
                ]}
                ctaText={tr("subscription.settings.manage-your-subscription")}
                ctaLink={goToPayments}
                editors={profile?.props?.subscription?.quantity}
              />
            )
          )}

          {subscriptionType === "enterprise" && (
            subscriptionIsTrial ? (
              <PlanCard
                cardTitle={tr("subscription.settings.enterprise-trial")}
                cardTitleIcon="character-e"
                benefitsTitle={tr("subscription.settings.benefits.all-unlimited-benefits")}
                benefits={[
                  tr("subscription.settings.enterprise.unlimited-storage-benefit"),
                  tr("subscription.settings.enterprise.autosave"),
                  tr("subscription.settings.enterprise.capped-bill")
                ]}
                ctaText={tr("subscription.settings.manage-your-subscription")}
                ctaLink={goToPayments}
                ctaTextTrial={tr("subscription.settings.add-payment-to-continue")}
                ctaLinkTrial={goToPayments}
              />
            ) : (
              <PlanCard
                cardTitle={tr("subscription.settings.enterprise")}
                cardTitleIcon="character-e"
                benefitsTitle={tr("subscription.settings.benefits.all-unlimited-benefits")}
                benefits={[
                  tr("subscription.settings.enterprise.unlimited-storage-benefit"),
                  tr("subscription.settings.enterprise.autosave"),
                  tr("subscription.settings.enterprise.capped-bill")
                ]}
                ctaText={tr("subscription.settings.manage-your-subscription")}
                ctaLink={goToPayments}
              />
            )
          )}

          <div className="membership-container">
            {subscribedSince && subscriptionType !== "professional" && (
              <div className="membership">
                <Icon className="subscription-member" iconId="crown" size="m" />
                <span className="membership-date">
                  {tr("subscription.settings.support-us-since", subscribedSince)}
                </span>
              </div>
            )}

            <div className="membership">
              <Icon className="penpot-member" iconId="user" size="m" />
              <span className="membership-date">
                {tr("subscription.settings.member-since", memberSince)}
              </span>
            </div>
          </div>
        </div>

        <div className="other-subscriptions">
          <h3 className="plan-section-title">{tr("subscription.settings.other-plans")}</h3>
          {subscriptionType !== "professional" && (
            <PlanCard
              cardTitle={tr("subscription.settings.professional")}
              priceValue="$0"
              pricePeriod={tr("subscription.settings.price-editor-month")}
              benefits={[
                tr("subscription.settings.professional.storage-benefit"),
                tr("subscription.settings.professional.autosave-benefit"),
                tr("subscription.settings.professional.teams-editors-benefit")
              ]}
              ctaText={tr("subscription.settings.subscribe")}
              ctaLink={() => openSubscriptionModal("professional", subscription)}
              ctaTextWithIcon={tr("subscription.settings.more-information")}
              ctaLinkWithIcon={goToPricingPage}
            />
          )}

          {subscriptionType !== "unlimited" && (
            <PlanCard
              cardTitle={tr("subscription.settings.unlimited")}
              cardTitleIcon="character-u"
              priceValue="$7"
              pricePeriod={tr("subscription.settings.price-editor-month")}
              benefitsTitle={tr("subscription.settings.benefits.all-professional-benefits")}
              benefits={[
                tr("subscription.settings.unlimited.storage-benefit"),
                tr("subscription.settings.unlimited.autosave-benefit"),
                tr("subscription.settings.unlimited.bill")
              ]}
              ctaText={subscription?.type ? tr("subscription.settings.subscribe") : tr("subscription.settings.try-it-free")}
              ctaLink={() => openSubscriptionModal("unlimited", subscription)}
              ctaTextWithIcon={tr("subscription.settings.more-information")}
              ctaLinkWithIcon={goToPricingPage}
              recommended={subscriptionType === "professional"}
              showButtonCta={subscriptionType === "professional"}
            />
          )}

          {subscriptionType !== "enterprise" && (
            <PlanCard
              cardTitle={tr("subscription.settings.enterprise")}
              cardTitleIcon="character-e"
              priceValue="$950"
              pricePeriod={tr("subscription.settings.price-organization-month")}
              benefitsTitle={tr("subscription.settings.benefits.all-unlimited-benefits")}
              benefits={[
                tr("subscription.settings.enterprise.unlimited-storage-benefit"),
                tr("subscription.settings.enterprise.autosave"),
                tr("subscription.settings.enterprise.capped-bill")
              ]}
              ctaText={subscription?.type ? tr("subscription.settings.subscribe") : tr("subscription.settings.try-it-free")}
              ctaLink={() => openSubscriptionModal("enterprise", subscription)}
              ctaTextWithIcon={tr("subscription.settings.more-information")}
              ctaLinkWithIcon={goToPricingPage}
              showButtonCta={subscriptionType === "professional"}
            />
          )}
        </div>
      </div>
    </section>
  );
}

import { useDeref } from "@shared/rum";
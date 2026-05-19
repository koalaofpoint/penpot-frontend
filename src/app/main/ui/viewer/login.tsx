// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useCallback, useState } from "react";
import * as modal from "@app/main/data/modal";
import { emit } from "@app/main/store";
import { LoginDialog } from "@app/main/ui/auth/login";
import { RecoveryRequestPage } from "@app/main/ui/auth.recovery-request";
import { RegisterMethods, RegisterSuccessPage, TermsRegister, RegisterValidateForm } from "@app/main/ui/auth.register";
import * as deprecatedIcon from "@app/main/ui/icons";
import * as dom from "@app/util/dom";
import { tr } from "@app/util/i18n";

export function LoginRegisterModal() {
  const [userEmail, setUserEmail] = useState("");
  const [registerToken, setRegisterToken] = useState("");

  const [currentSection, setCurrentSection] = useState<"login" | "register" | "register-validate" | "recovery-request" | "email-sent">("login");

  const setSection = useCallback((event: React.MouseEvent) => {
    const target = dom.getCurrentTarget(event) as HTMLElement;
    const section = dom.getData(target, "value") as any;
    setCurrentSection(section);
  }, []);

  const goBackToLogin = useCallback(() => setCurrentSection("login"), []);

  const mainSection = ["login", "register", "register-validate"].includes(currentSection);

  const close = useCallback((event: React.MouseEvent) => {
    dom.preventDefault(event);
    emit(modal.hide());
  }, []);

  const successEmailSent = useCallback((email: string) => {
    setUserEmail(email);
    setCurrentSection("email-sent");
  }, []);

  const successLogin = useCallback(() => {
    (window.location as any).reload(true);
  }, []);

  const successRegister = useCallback((data: any) => {
    setRegisterToken(data.token);
    setCurrentSection("register-validate");
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{tr("labels.continue-with-penpot")}</h2>
          <button className="modal-close-btn" title={tr("labels.close")} onClick={close}>
            {deprecatedIcon.close}
          </button>
        </div>

        <div className="modal-content">
          {currentSection === "login" && (
            <div className="form-container">
              <LoginDialog onSuccessCallback={successLogin} origin="viewer" />
              <div className="links">
                <div className="recovery-request">
                  <a
                    onClick={setSection}
                    className="recovery-link"
                    data-value="recovery-request"
                  >
                    {tr("auth.forgot-password")}
                  </a>
                </div>
                <div className="register">
                  <span className="register-text">{tr("auth.register")} </span>
                  <a
                    onClick={setSection}
                    className="register-link"
                    data-value="register"
                  >
                    {tr("auth.register-submit")}
                  </a>
                </div>
              </div>
            </div>
          )}

          {currentSection === "register" && (
            <div className="form-container">
              <RegisterMethods onSuccessCallback={successRegister} />
              <div className="links">
                <div className="account">
                  <span>{tr("auth.already-have-account")} </span>
                  <a onClick={setSection} data-value="login">
                    {tr("auth.login-here")}
                  </a>
                </div>
              </div>
            </div>
          )}

          {currentSection === "register-validate" && (
            <div className="form-container">
              <RegisterValidateForm
                params={{ token: registerToken }}
                onSuccessCallback={successEmailSent}
              />
              <div className="links">
                <div className="register">
                  <a onClick={setSection} data-value="register">
                    {tr("labels.go-back")}
                  </a>
                </div>
              </div>
            </div>
          )}

          {currentSection === "recovery-request" && (
            <RecoveryRequestPage
              goBackCallback={goBackToLogin}
              onSuccessCallback={successEmailSent}
            />
          )}

          {currentSection === "email-sent" && (
            <div className="form-container">
              <RegisterSuccessPage params={{ email: userEmail }} />
            </div>
          )}
        </div>

        {mainSection && (
          <div className="links">
            <TermsRegister />
          </div>
        )}
      </div>
    </div>
  );
}
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import css and cssCase from proper location
// import { css, cssCase } from '../../main/style';
// import { fm } from '../../../util/forms';
// import { d } from '../../../common/data';
// import { i18n, tr } from '../../../util/i18n';
// import { str } from 'cuerdas.core';
// import { ev } from '../../../main/data/event';
// import { du } from '../../../main/data/profile';
// import { st } from '../../../main/store';
// import { ptk } from 'potok.v2/core';
// import { deprecated-icon } from '../icons';

interface StepContainerProps {
  form: any;
  step: number;
  onNext?: (form: any, event?: React.FormEvent) => void;
  onPrev?: () => void;
  children?: React.ReactNode;
  class?: string;
  label?: string;
}

function StepContainer({ form, step, onNext, onPrev, children, class: className, label }: StepContainerProps) {
  const handleSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (onNext) {
      onNext(form, event);
    }
  }, [onNext, form]);

  return (
    <form className={`${className || ''} form-wrapper`} onSubmit={handleSubmit}>
      {children}
      <div className="action-buttons">
        {onPrev && (
          <button type="button" className="prev-button" onClick={onPrev}>
            Previous
          </button>
        )}
        <button type="submit" className="next-button">
          {step < 4 ? "Next" : "Start"}
        </button>
      </div>
    </form>
  );
}

interface Step1Props {
  onNext: (form: any, event?: React.FormEvent) => void;
  onPrev?: () => void;
  form: any;
  showStep3: boolean;
}

function Step1({ onNext, onPrev, form, showStep3 }: Step1Props) {
  const useOptions = React.useMemo(() =>
    shuffle([
      { label: "Work", value: "work" },
      { label: "Education", value: "education" },
      { label: "Personal", value: "personal" }
    ]), []);

  const roleOptions = React.useMemo(() => {
    const shuffled = shuffle([
      { label: "Select an option", value: "", key: "role", disabled: true },
      { label: "Product Design", value: "ux", key: "ux" },
      { label: "Developer", value: "developer", key: "developer" },
      { label: "Student/Teacher", value: "student-teacher", key: "student" },
      { label: "Graphic Design", value: "designer", key: "design" },
      { label: "Marketing", value: "marketing", key: "marketing" },
      { label: "Product Management", value: "manager", key: "manager" }
    ]);
    return [...shuffled, { label: "Other", value: "other" }];
  }, []);

  const currentRole = form?.data?.role;

  return (
    <StepContainer
      form={form}
      step={1}
      label="questions:about-you"
      onNext={onNext}
      class="step-1"
    >
      <div className="paginator">{showStep3 ? "1/4" : "1/3"}</div>

      <img
        className="header-image"
        src="images/form/use-for-1.png"
        alt="Let's get started"
      />
      <h1 className="modal-title">About you</h1>
      <p className="modal-text">Tell us a bit about yourself</p>

      <div className="modal-question">
        <h3 className="modal-subtitle">What will you use Penpot for?</h3>

        <div className="radio-btns">
          {useOptions.map(opt => (
            <label key={opt.value} className="radio-label">
              <input
                type="radio"
                name="expected-use"
                value={opt.value}
                checked={form?.data?.["expected-use"] === opt.value}
                onChange={() => {}}
              />
              {opt.label}
            </label>
          ))}
        </div>

        <h3 className="modal-subtitle">What best describes your role?</h3>
        <select
          name="role"
          className="select-class"
          value={form?.data?.role || ""}
          onChange={() => {}}
        >
          {roleOptions.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {currentRole === "other" && (
          <input
            name="role-other"
            className="input-spacing"
            placeholder="Other"
            showError={false}
            label=""
          />
        )}
      </div>
    </StepContainer>
  );
}

interface Step2Props {
  onNext: (form: any, event?: React.FormEvent) => void;
  onPrev?: () => void;
  form: any;
  showStep3: boolean;
}

function Step2({ onNext, onPrev, form, showStep3 }: Step2Props) {
  const designToolOptions = React.useMemo(() => {
    const tools = [
      { label: "Figma", value: "figma", image: "images/form/figma.png" },
      { label: "Sketch", value: "sketch", image: "images/form/sketch.png" },
      { label: "Adobe XD", value: "adobe-xd", image: "images/form/adobe-xd.png" },
      { label: "Canva", value: "canva", image: "images/form/canva.png" },
      { label: "Invision", value: "invision", image: "images/form/invision.png" }
    ];
    return [...shuffle(tools), { label: "Other", value: "other" }];
  }, []);

  const currentExperience = form?.data?.["experience-design-tool"];

  return (
    <StepContainer
      form={form}
      step={2}
      label="questions:experience-design-tool"
      onNext={onNext}
      onPrev={onPrev}
      class="step-2"
    >
      <div className="paginator">{showStep3 ? "2/4" : "2/3"}</div>

      <h1 className="modal-title">Previous experience</h1>
      <div className="radio-wrapper">
        <div className="image-radio">
          {designToolOptions.map(opt => (
            <label key={opt.value} className="radio-label-image">
              {opt.image && (
                <span
                  style={{ backgroundImage: `url(${opt.image})` }}
                  className="image-inside"
                />
              )}
              <span className="image-text">{opt.label}</span>
              <input
                type="radio"
                name="experience-design-tool"
                value={opt.value}
                checked={currentExperience === opt.value}
                onChange={() => {}}
              />
            </label>
          ))}
        </div>

        {currentExperience === "other" && (
          <input
            name="experience-design-tool-other"
            className="input-spacing"
            placeholder="Other"
            showError={false}
            label=""
          />
        )}
      </div>
    </StepContainer>
  );
}

interface Step3Props {
  onNext: (form: any, event?: React.FormEvent) => void;
  onPrev?: () => void;
  form: any;
  showStep3: boolean;
}

function Step3({ onNext, onPrev, form, showStep3 }: Step3Props) {
  const teamSizeOptions = React.useMemo(() => [
    { label: "Select an option", value: "", key: "team-size", disabled: true },
    { label: "More than 50", value: "more-than-50", key: "more-than-50" },
    { label: "31-50", value: "31-50", key: "31-50" },
    { label: "11-30", value: "11-30", key: "11-30" },
    { label: "2-10", value: "2-10", key: "2-10" },
    { label: "Freelancer", value: "freelancer", key: "freelancer" },
    { label: "Personal project", value: "personal-project", key: "personal-project" }
  ], []);

  const planningOptions = React.useMemo(() => {
    const plans = [
      { label: "Exploring", value: "discover-more-about-penpot", key: "discover-more-about-penpot" },
      { label: "Testing for my team", value: "test-penpot-to-see-if-its-a-fit-for-team", key: "test-penpot-to-see-if-its-a-fit-for-team" },
      { label: "Looking for an alternative", value: "alternative-to-figma", key: "alternative-to-figma" },
      { label: "Trying before using on-premise", value: "try-out-before-using-penpot-on-premise", key: "try-out-before-using-penpot-on-premise" }
    ];
    return [...shuffle(plans), { label: "Other", value: "other" }];
  }, []);

  const currentPlanning = form?.data?.planning;

  return (
    <StepContainer
      form={form}
      step={3}
      label="questions:about-your-job"
      onNext={onNext}
      onPrev={onPrev}
      class="step-3"
    >
      <div className="paginator">{showStep3 ? "3/4" : "3/3"}</div>

      <h1 className="modal-title">About your job</h1>
      <div className="modal-question">
        <h3 className="modal-subtitle">What brings you here?</h3>

        <select
          name="planning"
          className="select-class question-dropdown"
          value={form?.data?.planning || ""}
          onChange={() => {}}
        >
          {planningOptions.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {currentPlanning === "other" && (
        <input
          name="planning-other"
          className="input-spacing"
          placeholder="Other"
          showError={false}
          label=""
        />
      )}

      <div className="modal-question">
        <h3 className="modal-subtitle">What's your team size?</h3>
        <select
          name="team-size"
          className="select-class"
          value={form?.data?.["team-size"] || ""}
          onChange={() => {}}
        >
          {teamSizeOptions.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </StepContainer>
  );
}

interface Step4Props {
  onNext: (form: any, event?: React.FormEvent) => void;
  onPrev?: () => void;
  form: any;
  showStep3: boolean;
}

function Step4({ onNext, onPrev, form, showStep3 }: Step4Props) {
  const startOptions = React.useMemo(() => {
    const options = [
      { label: "UI Design", value: "ui", image: "images/form/Design.png" },
      { label: "Wireframing", value: "wireframing", image: "images/form/templates.png" },
      { label: "Prototyping", value: "prototyping", image: "images/form/Prototype.png" },
      { label: "Design Systems", value: "ds", image: "images/form/components.png" },
      { label: "Code Integration", value: "code", image: "images/form/design-and-dev.png" }
    ];
    return [...shuffle(options), { label: "Other", value: "other" }];
  }, []);

  const currentStart = form?.data?.["start-with"];

  return (
    <StepContainer
      form={form}
      step={4}
      label="questions:how-start"
      onNext={onNext}
      onPrev={onPrev}
      class="step-4"
    >
      <div className="paginator">{showStep3 ? "4/4" : "3/3"}</div>

      <h1 className="modal-title">How will you start?</h1>
      <div className="radio-wrapper">
        <div className="image-radio">
          {startOptions.map(opt => (
            <label key={opt.value} className="radio-label-image">
              <span
                style={{ backgroundImage: `url(${opt.image})` }}
                className="image-inside"
              />
              <span className="image-text">{opt.label}</span>
              <input
                type="radio"
                name="start-with"
                value={opt.value}
                checked={currentStart === opt.value}
                onChange={() => {}}
              />
            </label>
          ))}
        </div>

        {currentStart === "other" && (
          <input
            name="start-with-other"
            className="input-spacing"
            label=""
            showError={false}
            placeholder="Other"
          />
        )}
      </div>
    </StepContainer>
  );
}

// Helper function to shuffle array
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function QuestionsModal() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [step, setStep] = React.useState(1);
  const [cleanData, setCleanData] = React.useState<Record<string, any>>({});
  const [showStep3, setShowStep3] = React.useState(false);

  // Forms are initialized here because we can go back and forth between the steps
  // and we want to keep the filled info
  const [step1Form, setStep1Form] = React.useState({ data: {}, cleanData: {}, errors: {}, touched: {}, valid: true });
  const [step2Form, setStep2Form] = React.useState({ data: {}, cleanData: {}, errors: {}, touched: {}, valid: true });
  const [step3Form, setStep3Form] = React.useState({ data: {}, cleanData: {}, errors: {}, touched: {}, valid: true });
  const [step4Form, setStep4Form] = React.useState({ data: {}, cleanData: {}, errors: {}, touched: {}, valid: true });

  const handleNext = React.useCallback((form: any) => {
    const expectedUse = form?.cleanData?.["expected-use"] || form?.data?.["expected-use"];
    if (expectedUse === "work") {
      setShowStep3(true);
    } else {
      setShowStep3(false);
    }
    setStep(prev => prev + 1);
    if (form?.cleanData) {
      setCleanData(prev => ({ ...prev, ...form.cleanData }));
    } else if (form?.data) {
      setCleanData(prev => ({ ...prev, ...form.data }));
    }
  }, []);

  const handlePrev = React.useCallback(() => {
    setStep(prev => prev - 1);
  }, []);

  const handleSubmit = React.useCallback((form: any) => {
    const data = { ...cleanData, ...(form?.cleanData || form?.data || {}) };
    setCleanData(data);
    // TODO: Emit mark-questions-as-answered event
    // st/emit!(du/mark-questions-as-answered(data));
  }, [cleanData]);

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={containerRef}>
        {step === 1 && (
          <Step1
            onNext={handleNext}
            onPrev={handlePrev}
            form={step1Form}
            showStep3={showStep3}
          />
        )}
        {step === 2 && (
          <Step2
            onNext={handleNext}
            onPrev={handlePrev}
            form={step2Form}
            showStep3={showStep3}
          />
        )}
        {step === 3 && showStep3 && (
          <Step3
            onNext={handleNext}
            onPrev={handlePrev}
            form={step3Form}
            showStep3={showStep3}
          />
        )}
        {step === 3 && !showStep3 && (
          <Step4
            onNext={handleSubmit}
            onPrev={handlePrev}
            form={step4Form}
            showStep3={showStep3}
          />
        )}
        {step === 4 && showStep3 && (
          <Step4
            onNext={handleSubmit}
            onPrev={handlePrev}
            form={step4Form}
            showStep3={showStep3}
          />
        )}
      </div>
    </div>
  );
}

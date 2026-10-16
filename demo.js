"use strict";

const SalesLearningDemo = (() => {
  const examples = {
    brief: {
      title: "Account Intelligence: a useful brief, without pretending to know everything",
      notes: "Fictional Northstar account notes dated October 15, 2026: Jordan wants technicians to find manuals faster. Casey will identify a security reviewer. One equipment family is suggested but not chosen. No budget, start date, success target, or data-use approval is confirmed. No CRM or service records are supplied.",
      prompt: "Use Sales Suite | Account & Deals. Synthetic notes only; do not look up any records. Fictional Northstar account notes dated October 15, 2026: Jordan wants technicians to find manuals faster; Casey will identify a security reviewer. No equipment family, budget, start date, success target, or data-use approval is confirmed. No CRM or service records are supplied. Prepare an Account Intelligence brief: known need, confirmed responsibilities, evidence date, missing information, and one next action. Do not infer account health, pipeline, or buying intent. Do not query CRM, email, or Teams; do not send, save, schedule, assign, or change anything.",
      html: "<p><strong>Bottom line:</strong> Northstar has a need to explore, not a committed pilot.</p><ul><li><strong>Customer need:</strong> Jordan wants technicians to find manuals faster.</li><li><strong>Responsibility:</strong> Casey will identify the security reviewer; no reviewer is confirmed.</li><li><strong>Evidence:</strong> supplied fictional notes, October 15, 2026. No CRM, service history, or other sources checked.</li><li><strong>Next move:</strong> clarify scope and the data-review path before proposing a pilot.</li></ul><p><strong>Not confirmed:</strong> budget, timing, success target, account health, or buying intent. A new teammate can start from this brief, but must verify its context.</p>"
    },
    followup: {
      title: "Meeting follow-up: one clear next move, with dependencies",
      notes: "Fictional Northstar: Jordan will send three synthetic scenarios by October 20, 2026. Casey will identify the IT security reviewer; nobody is named. IT review is required before customer data is used. Bill will draft an outline after receiving the scenarios. No one agreed to schedule the review.",
      prompt: "Use Sales Suite | Seller Workflows. Synthetic notes only: fictional Northstar's Jordan will send three synthetic scenarios by October 20, 2026. Casey will identify the IT security reviewer; nobody is named. IT review is required before customer data is used. Bill will draft an outline after the scenarios arrive. Nobody agreed to schedule the review. Show the bottom line, agreed owners and dependencies, open questions, and one next best action. Keep reviewer naming, review completion, and data approval separate. Do not query CRM, email, or Teams; do not send, save, schedule, assign, or change anything.",
      html: "<p><strong>Next move:</strong> Casey identifies the IT security reviewer. No deadline was agreed.</p><ul><li><strong>Jordan:</strong> sends three synthetic scenarios by October 20, 2026.</li><li><strong>Bill:</strong> drafts the outline after the scenarios arrive; no delivery date was agreed.</li><li><strong>Still open:</strong> who schedules the review. No owner has been assigned.</li></ul><p><strong>Three separate gates:</strong> name a reviewer, complete the review, document the data-use decision. None is complete. Synthetic preparation can continue without real customer data.</p>"
    },
    coach: {
      title: "Deal coaching: ask for evidence, not a more optimistic forecast",
      notes: "Fictional Northstar asked for a proposal. Budget is unconfirmed, engineering has not validated fit, and the requested delivery date has not been accepted.",
      prompt: "Use Sales Suite | Seller Workflows. Synthetic notes only: fictional Northstar requested a proposal; budget is unconfirmed; engineering has not validated fit; the requested delivery date is not agreed. As a sales leader, give me evidence gaps, three coaching questions, and a proposed next step. Do not infer purchase intent or employee performance. Do not query CRM, email, or Teams; do not send, save, schedule, assign, or change stage, forecast, pricing, or ownership.",
      html: "<p><strong>Bottom line:</strong> a proposal request is not a purchase commitment.</p><ul><li><strong>Budget:</strong> who can confirm the funding and decision process?</li><li><strong>Fit:</strong> what does engineering still need to validate?</li><li><strong>Timing:</strong> which delivery constraints must be checked before making a promise?</li></ul><p><strong>Proposed next step:</strong> the seller coordinates those clarifications. No owner was newly assigned; no stage or forecast was changed.</p>"
    },
    handoff: {
      title: "Account-team handoff: give the next teammate a clear job",
      notes: "Fictional Northstar: Jordan will provide synthetic scenarios. The equipment family and success target are open. Casey will identify a security reviewer. No SE is assigned and no review, data-use approval, or pilot start is agreed.",
      prompt: "Use Sales Suite | Account & Deals. Synthetic notes only: fictional Northstar's Jordan will provide synthetic scenarios; the equipment family and success target are open; Casey will identify a security reviewer. No SE is assigned and no review, data-use approval, or pilot start is agreed. Draft a proposed account-team handoff: minimum context, receiving role, specific question, prerequisites, acceptance criteria, and next action. Label owners and recommendations not agreed in the notes as proposed. Do not query CRM, email, or Teams; do not send, save, schedule, assign, or change anything.",
      html: "<p><strong>Proposed recipient:</strong> an SE. No person is assigned or notified.</p><ul><li><strong>Context:</strong> Northstar wants faster access to manuals; scope and success target remain open.</li><li><strong>Requested help:</strong> review the synthetic scenarios when received and draft scope and measurement questions.</li><li><strong>Prerequisite:</strong> Jordan supplies the scenarios. Keep customer data out until its use is explicitly approved.</li><li><strong>Ready to close the handoff:</strong> the receiving SE accepts the task and the scope questions are reviewed. Neither has happened.</li></ul><p><strong>Next move, proposed:</strong> the account lead confirms a receiving SE. Casey's separate reviewer-identification task remains unchanged.</p>"
    }
  };
  const stages = [
    {
      title: "Ask with business context",
      question: "Prepare a follow-up for Northstar's service pilot.",
      next: "Show plausible matches",
      html: "<h3 id=\"result-title\">Start with the intended outcome</h3><p>You do not need a GUID. In a connected agent, authorized discovery can resolve record IDs behind the scenes. Here, every match is fictional and predefined.</p><p><strong>Next:</strong> inspect the plausible opportunities before selecting one.</p>"
    },
    {
      title: "Confirm the right opportunity",
      question: "Two fictional opportunities could fit. Choose one before continuing.",
      next: "Confirm the selected example",
      html: "<h3 id=\"result-title\">A plausible match is not confirmation</h3><p>Field Service Agent Pilot fits the meeting notes. Service Support Renewal is a different opportunity. No live CRM search was performed.</p>"
    },
    {
      title: "Separate facts from proposals",
      question: "You confirmed Field Service Agent Pilot. Review the supplied notes, not other sources.",
      next: "Build the proposed V-team handoff",
      html: "<h3 id=\"result-title\">Bottom line: discovery, not a committed pilot</h3><p>The customer wants faster repair guidance. Scope, duration, start, budget, success target, and data-use approval remain open.</p><ul><li><strong>Jordan:</strong> send three anonymized scenarios by October 20, 2026.</li><li><strong>Bill:</strong> draft an outline after the scenarios arrive; due date not agreed.</li><li><strong>Casey:</strong> identify the security reviewer; due date not agreed.</li></ul><p><strong>Next best action:</strong> Casey identifies the reviewer. Jordan's scenario preparation is a parallel track; whether the anonymized scenarios require IT review is not established.</p><p>No follow-up meeting is scheduled. The outline must remain free of real customer data until its permitted use is confirmed.</p>"
    },
    {
      title: "Coordinate without implying assignment",
      question: "Turn the open decisions into a reviewable handoff.",
      next: "Review the safety checks",
      html: "<h3 id=\"result-title\">Proposed handoff—not a notification</h3><p><strong>To the SE, proposed:</strong> prepare questions about the equipment family and a measurable success target after the scenarios arrive. No pilot duration or start is promised.</p><p><strong>To the AE, proposed:</strong> confirm the decision process and agree a follow-up after the scenarios arrive. No purchase intent or budget is inferred.</p><p><strong>Security gate:</strong> reviewer identified → review completed → explicit data-use decision and conditions. These are three separate confirmations, not one approval.</p><p><strong>Parallel work:</strong> Jordan prepares scenarios; Bill drafts only after receiving them and clarifying permitted use. Handoffs and scheduling ownership remain proposals for review.</p>"
    },
    {
      title: "Review before using it",
      question: "What makes this a safe rehearsal?",
      next: "Rehearsal complete",
      html: "<h3 id=\"result-title\">Nothing ran against a real account</h3><ul><li>All responses were predefined examples, not model-generated output.</li><li>No CRM, Microsoft 365, Work IQ, or Salesforce source was queried.</li><li>Nothing was sent, saved, scheduled, assigned, or changed.</li><li>Synthetic notes are not evidence of a real meeting or commitment.</li></ul><p><strong>Next:</strong> copy the rehearsal prompt below into an approved installation. Check host activity and boundaries; do not accept a claim of execution without evidence.</p>"
    }
  ];

  function advance(step, selected) {
    if (step === 1 && selected !== "pilot") {
      return { step, error: selected === "renewal"
        ? "That renewal is a different opportunity. Choose the pilot example or go back; no records were merged."
        : "Choose a fictional opportunity before continuing." };
    }
    return { step: Math.min(step + 1, stages.length - 1), error: "" };
  }

  return { examples, stages, advance };
})();

if (typeof module !== "undefined") module.exports = SalesLearningDemo;

async function copyPrompt(prompt, status) {
  try {
    if (!navigator.clipboard || !window.isSecureContext) {
      throw new Error("Clipboard is unavailable in this browser context.");
    }
    await navigator.clipboard.writeText(prompt.textContent);
    status.textContent = "Copied. Paste into your approved agent host; copying does not run a workflow.";
  } catch (error) {
    status.textContent = `Could not copy: ${error.message} Select the displayed prompt and copy it manually.`;
    const details = prompt.closest("details");
    if (details) details.open = true;
    const range = document.createRange();
    range.selectNodeContents(prompt);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}

if (typeof document !== "undefined" && document.getElementById("quick-result")) {
  const result = document.getElementById("quick-result");
  const buttons = document.querySelectorAll("[data-example]");
  buttons.forEach(button => button.addEventListener("click", () => {
    const example = SalesLearningDemo.examples[button.dataset.example];
    buttons.forEach(choice => choice.setAttribute("aria-pressed", String(choice === button)));
    result.innerHTML = `<h3 id="quick-title">${example.title}</h3>${example.html}<p><small>Predefined sample from fictional notes. No AI, source lookup, or external action.</small></p>`;
    document.getElementById("quick-notes").textContent = example.notes;
    document.getElementById("quick-prompt").textContent = example.prompt;
    document.getElementById("quick-input").hidden = false;
    document.getElementById("quick-prompt-panel").hidden = false;
    document.getElementById("quick-copy-status").textContent = "";
    result.focus();
  }));
  document.getElementById("quick-copy").addEventListener("click", () =>
    copyPrompt(document.getElementById("quick-prompt"), document.getElementById("quick-copy-status")));
}

if (typeof document !== "undefined" && document.getElementById("demo-next")) {
  let step = 0;
  const next = document.getElementById("demo-next");
  const back = document.getElementById("demo-back");
  const selection = document.getElementById("opportunity");
  const status = document.getElementById("demo-status");
  const result = document.getElementById("demo-result");

  function render(focus) {
    const stage = SalesLearningDemo.stages[step];
    document.getElementById("demo-step").textContent = `Step ${step + 1} of 5: ${stage.title}`;
    document.getElementById("demo-question").textContent = stage.question;
    document.getElementById("match-control").hidden = step !== 1;
    result.innerHTML = stage.html;
    next.textContent = stage.next;
    next.disabled = step === SalesLearningDemo.stages.length - 1;
    back.disabled = step === 0;
    if (focus) result.focus();
  }

  next.addEventListener("click", () => {
    const update = SalesLearningDemo.advance(step, selection.value);
    status.textContent = update.error;
    step = update.step;
    render(!update.error);
  });
  back.addEventListener("click", () => {
    step = Math.max(0, step - 1);
    status.textContent = "";
    render(true);
  });
  document.getElementById("demo-reset").addEventListener("click", () => {
    step = 0;
    selection.value = "";
    status.textContent = "";
    document.getElementById("copy-status").textContent = "";
    render(true);
  });
  render(false);
}

if (typeof document !== "undefined" && document.getElementById("copy-button")) {
  document.getElementById("copy-button").addEventListener("click", async () => {
    await copyPrompt(document.getElementById("copy-prompt"), document.getElementById("copy-status"));
  });
}

if (typeof document !== "undefined" && document.getElementById("example-prompts")) {
  const prompts = document.querySelectorAll("#example-prompts details");
  document.getElementById("prompt-controls").hidden = false;
  function setPromptsOpen(open) {
    prompts.forEach(prompt => { prompt.open = open; });
    document.getElementById("prompt-status").textContent =
      open ? `All ${prompts.length} example prompts are shown.` : "All example prompts are collapsed.";
  }

  document.getElementById("show-prompts").addEventListener("click", () => setPromptsOpen(true));
  document.getElementById("collapse-prompts").addEventListener("click", () => setPromptsOpen(false));
}

if (typeof document !== "undefined") {
  document.querySelectorAll("[data-copy-prompt]").forEach(button => {
    button.addEventListener("click", () => copyPrompt(
      document.getElementById(button.dataset.copyPrompt),
      document.getElementById(button.getAttribute("aria-describedby"))));
  });
}

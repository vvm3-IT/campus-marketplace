# Jovan Fernandez — pickup research & buyer persona

**Account:** [@Jovandon9](https://github.com/Jovandon9) · **Assignment:** [#2](https://github.com/vvm3-IT/campus-marketplace/issues/2) · **Source checked:** November 18, 2026

::: info Authorship and scope
Prepared with Codex assistance at Jovan Fernandez's request. The connected account identifies Jovan Fernandez as Jovandon9 and has write access to this repository. This records source analysis and a documented design recommendation, not an interview, independent learner explanation, teammate approval or product test.
:::

## Original source and finding

[OfferUp — About Community MeetUp Spots](https://help.offerup.com/hc/en-us/articles/360032335691-About-Community-MeetUp-Spots), updated May 16, 2025; reopened November 18, 2026.

OfferUp describes designated meetup spaces associated with local partners. Its stated attributes include lighting, surveillance and accessibility; its app supports sharing a location, then agreeing a time. These are OfferUp's descriptions of its program, not this team's verification of any site.

**Finding in paraphrase:** Naming a pickup area does not settle the actual handoff. The buyer still needs agreement on where and when to meet. A location label also needs provenance: a seller suggestion is different from a location designated by a service.

The article supports a coordination precedent. It does not demonstrate demand among NJIT students, certify our marketplace, or establish that an NJIT location has been investigated or approved. No campus-location inspection was conducted.

## D3 decision — adopt the purpose, revise the detail

Adopt explicit pickup context; revise D3 so the listing distinguishes a **seller-proposed general pickup area** from a **confirmed arrangement**. Add an optional indicative time window labeled as a proposal. If omitted, display “Time to be agreed,” not an implied appointment.

Do not publicly require a private home address, precise personal schedule or contact details. No “approved,” “verified” or safety badge should be attached to a campus place on the basis of this article. Keep public-meetup guidance as general guidance with a source link, not a guarantee. Investigating specific places would require separate, current evidence of designation, access and applicable restrictions; this task does not endorse a location.

### Alternatives considered

| Approach | Benefit | Tradeoff / decision |
| --- | --- | --- |
| Free text only, with no labels | Small form and flexible descriptions | Readers may mistake a suggestion for an agreement; revise with explicit proposal labels and missing-value guidance. |
| Fixed list of campus “approved” spots | Consistent choices | No investigation or authority supports that label; defer. |
| Labeled general area plus optional indicative window | Gives buyers enough context to ask whether pickup could fit an existing trip | Still requires agreement; chosen as a proposed minimum, with no live chat or booking claim. |

Real-time chat remains deferred under the group's scope. Before building a real contact/confirmation workflow, decide how parties agree privately. The research does not claim that this mechanism already exists.

## P1 revision and reasoning

Keep Maya as a fictional commuter buyer, but avoid assuming all commuters have identical transport, mobility or timetable constraints. A general location and proposed window can help assess a possible pickup; they do not prove convenience or accessibility.

[Revised P1](./personas.md#persona-hypothesis-p1-commuter-buyer) separates availability of the item from agreement on pickup, allows missing details, and includes alternatives that could disconfirm the campus-pickup hypothesis.

## Checks — observed versus planned

**Observed November 18:** read the original OfferUp page, checked its displayed update date, compared D3 and P1 with the source, and confirmed that the existing record contains no investigated campus-location designation. This is documentation/source verification.

**Planned once a product exists:**
1. A sample listing shows a general area as seller-proposed, an indicative window as unconfirmed, and an independent available/sold label.
2. Omit a time: the page says it must be agreed. Omit an area: it identifies the missing information rather than inventing a location.
3. Confirm public required fields do not demand a home address or exact personal schedule; review instructions and rendered output for unintended disclosure.
4. An available item does not display a confirmed-pickup state automatically. Marking sold updates the existing availability behavior without implying a successful handoff.
5. Ask a consenting buyer to explain what is proposed, what is agreed, and what they still need to learn. Record the actual response; no result is claimed now.

## Later ownership and handoff

Jovan owns pickup/status design and implementation for the later build and will QA Chase's listing validation when it exists. Planned QA includes missing condition/required fields, clear errors, retained valid input and matching detail values. No implementation or QA has been performed for this research task.

Research edits and reasoning belong to task #2. Course peer review is separate and is not requested or claimed by this task. Teammate cross-review and actual checks must be recorded when they occur.

## AI assistance

Codex retrieved the source, compared its claims with the existing documents, drafted this paraphrase, refined P1 and D3, and prepared the linked documentation commit from Jovan's connected account. Jovan remains responsible for explaining and correcting this contribution. No participant quotes, interviews, campus approvals or observed product results were invented.

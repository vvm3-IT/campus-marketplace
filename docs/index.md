---
layout: default
title: Campus Marketplace Research
---

# Campus Marketplace — Research record

Research conducted November 17, 2026 · IS117 Group Business

Team: Varnit Monga (@vvm3-IT), @chaseac-cpu, Jovan Fernandez (@Jovandon9). Chase's full name needs confirmation.

Status: Original-source desk research complete. Personas are hypotheses. Product implementation, student interviews, and usability checks have not occurred. Peer review is excluded from this preparation at the team's request; the course's review requirements still apply.

## Question and scope
How could a marketplace help NJIT students discover and sell used essentials while understanding item condition, availability, and pickup arrangements?
Proposed audience: NJIT student buyers and sellers. Proposed categories: textbooks, electronics, school supplies, dorm essentials.
This research does not establish demand, transaction safety, price savings, or sufficient inventory. No university affiliation or endorsement is claimed.

## Original sources and comparison
All sources accessed November 17, 2026. Findings describe documented features; no logged-in competitor usability tests were performed.

| Source | Date | Evidence | Interpretation and limitation |
| --- | --- | --- | --- |
| [Facebook Marketplace launch documentation](https://about.fb.com/news/2016/10/introducing-marketplace-buy-and-sell-with-your-local-community/) | Published October 3, 2016; page also displays April 23, 2020 | Describes photo listings and location, category, and price filters | Photo cards and filters are a useful discovery precedent. Historical documentation does not establish the current interface or campus preferences. |
| [OfferUp: About Community MeetUp Spots](https://help.offerup.com/hc/en-us/articles/360032335691-About-Community-MeetUp-Spots) | Updated May 16, 2025 | Describes public meetup locations and sharing locations through messages | Pickup information deserves space in a listing. No NJIT location has been approved or investigated by this team. |
| [eBay: Seller ratings](https://www.ebay.com/help/Buying/Working_With_Sellers/Seller_ratings?id=4023) | No publication/update date displayed | Documents seller feedback, including description accuracy and communication | Transparency matters to the proposed design. Ratings require authentic transaction evidence and are deferred. |

Facebook's documented strength is discovery, OfferUp's is meetup coordination, and eBay's is transaction-based reputation. These are selected patterns, not comprehensive rankings of the services. Our proposed differentiation is campus organization, not a claim that these competitors cannot serve students.

## Two positioning alternatives
| Alternative | Promise | Benefit hypothesis | Tradeoff |
| --- | --- | --- | --- |
| A: Campus convenience | Used essentials organized around NJIT and local pickup | More relevant browsing and easier coordination | Smaller potential inventory and audience |
| B: Affordability and reuse | A student resale destination for passing along useful goods | Price comparison and reuse may appeal to students | Savings and environmental outcomes are unmeasured; less distinctive from general marketplaces |

Proposed decision D1: lead with campus convenience and support it with reuse. Proposed positioning: "For NJIT students buying or selling used essentials, Campus Marketplace organizes listings around campus life and local pickup."
Rationale: campus organization gives a concrete design focus; source patterns support discovery and coordination, but audience demand remains an assumption.
Reconsider if student research shows that delivery or inventory breadth outweighs proximity.

## Persona hypothesis P1 — commuter buyer
Fictional example: Maya, a commuter student looking for a used calculator.
Assumed goal: compare price and condition and arrange pickup during an existing campus visit.
Assumed difficulty: uncertain availability and pickup arrangements can require extra messages.
Context assumptions: uses a phone between classes; may not have time for a separate trip.
Proposed needs: search, category/price filtering, clear condition, availability, and pickup information.
Evidence boundary: none of these needs were reported by an actual participant.
Disconfirming evidence: commuters prefer delivery or existing sellers regardless of location.
Investigation: recruit a consenting commuter and ask about their most recent used-item purchase, alternatives considered, and how pickup worked. Do not suggest a preferred answer.
Planned task: find an available calculator within a stated budget and explain its condition and pickup arrangement.

## Persona hypothesis P2 — student seller
Fictional example: Alex, a student with a desk lamp and books they no longer use.
Assumed goal: publish accurate listings without much effort and stop receiving inquiries after an item sells.
Assumed difficulty: incomplete listing details may lead to repeated questions.
Context assumptions: has item photos and knows condition; may list during a move or semester change.
Proposed needs: a short listing form, preview, edit controls, and available/sold status.
Evidence boundary: no actual seller interview or observed behavior supports this persona yet.
Disconfirming evidence: sellers prioritize audience size or shipping over a focused campus form.
Investigation: ask a consenting student about their last attempt to sell an item, information they supplied, questions received, and why they chose that service.
Planned task: create a sample listing, inspect its details, then mark it sold.

No simulated quotations are used. Persona names and situations are invented and must not be represented as customers or interviews.

## Finding to decision to planned check
| ID and basis | Proposed decision | Planned observable check | Observed result |
| --- | --- | --- | --- |
| D2: Facebook documentation describes filtering | Search plus category and maximum-price controls | Use a fixed fixture set; verify all results match the query, category, and price, including a no-results case | Not run; no product exists |
| D3: OfferUp documents meetup coordination | Pickup description and public-meetup guidance on item pages | Open a listing and identify pickup information; ensure a private home address is not required publicly | Not run |
| D4: eBay describes description-accuracy feedback | Require condition and descriptive item details; defer ratings | Submit without condition, check a clear error and retained values; complete form and compare detail-page values | Not run |
| D5: P2 assumes availability matters | Owner-controlled available/sold state | Mark an item sold; verify it is labeled sold and omitted from default available results | Not run |
| D6: P1 assumes campus focus helps | Campus-oriented categories and pickup context | Have a consenting student perform P1's task; record actual completion, confusion, and explanation | Not run |

Evidence establishes precedents, not proven effectiveness for this audience. Feature proposals are not implementation claims.

## Initial feature boundary and alternatives
Proposed essentials: browse/search/filter; listing details; create/edit listing; available/sold status; pickup information.
Defer online checkout, delivery, ratings, and real-time chat until justified and feasible. A contact approach and privacy behavior need a separate decision before implementation.
University email verification is under investigation, not promised. Email ownership does not prove current enrollment or trustworthy conduct.
Static previews must label sample listings and simulated account behavior; do not present them as real transactions.

## Design and Brand Studio
Existing Brand Studio assets were not supplied. Carry them forward once Varnit links them; do not claim the draft document styling is the established product brand.
Proposed character: practical, welcoming, clear, and community focused.
Proposed layout: mobile-friendly listing cards with photo, title, price, condition, and status; explicit search labels; item details with pickup near the contact action. Show status using words as well as color. Support keyboard operation and readable contrast.
Alternative considered: a text-only classifieds list could fit more results, but photo cards are proposed because item appearance may help buyers assess relevance. This preference needs user testing.
The documentation page uses neutral temporary styling, separate from final product branding.

## Honest persuasion
Proposed headline: "Buy and sell used essentials around campus."
Supporting copy: "Browse listings or give something you no longer need a new home."
Use actual prices and accurate descriptions. Do not invent reviews, popularity counts, scarcity, safety guarantees, discounts, or NJIT endorsement. Display "No feedback yet" rather than fabricated reputation if ratings are later built.
No fees or revenue model have been approved. Compare a free student-listing model with optional paid promotion later; paid placements would need clear labels and demand evidence.

## Decision log
All decisions below are AI-assisted proposals awaiting identifiable team adoption or revision.
- D1: campus-convenience positioning; rationale and alternative above.
- D2: category/price search; source precedent plus untested audience fit.
- D3: explicit pickup context; investigate locations before suggesting them.
- D4: condition/details first, authentic ratings later.
- D5: sold status; based on seller persona assumption.
- D6: validate campus focus before expanding implementation.
- D7: reuse Brand Studio once supplied; neutral documentation styling is temporary.

## Team work and contribution record
The initial research synthesis and page were prepared by an AI assistant at Varnit's request and committed through @vvm3-IT. Account authorship is not evidence that teammates performed this work.
No teammate research, reviews, or verification is claimed complete. Each person must inspect sources, make their own decision, and link their own edits.

| Member | Research and decision assignment | Later design/development responsibility | QA responsibility |
| --- | --- | --- | --- |
| Varnit Monga / @vvm3-IT | Inspect Facebook source; adopt/revise audience and positioning; link existing Brand Studio and confirm scope | Browse/search/filter and brand integration | Verify Jovan's status and pickup behavior when implemented |
| @chaseac-cpu / full name pending | Inspect eBay source; revise seller persona and listing-field rationale; record decisions | Listing form/detail design and implementation | Verify Varnit's search/filter behavior when implemented |
| Jovan Fernandez / @Jovandon9 | Inspect OfferUp source; revise buyer persona and pickup assumptions; record decisions | Pickup/status design and implementation | Verify Chase's listing validation when implemented |

These are assignments, not completion claims. Each member has research, design/development, and QA work. Team members may rebalance and record why.
Completion evidence: a source-specific finding in the member's own words, a supported decision or revision, a linked commit/issue discussion, and an actual verification record where applicable. Full names and assignment acceptance still need confirmation.
Peer-review records and reviewer actions are not fabricated or completed by this preparation.

## Verification record — research versus product
Observed during preparation: the three linked original-source pages were retrieved and read; their documented feature claims support the evidence column. Facebook's source is historical, and eBay's displayed article has no publication date.
Not observed: student demand, task success, savings, safer outcomes, product behavior, or teammate acceptance.
Planned documentation check: verify published navigation, source links, persona labels, and decision/check mapping after deployment. Record its actual outcome separately.
No audio is included; therefore no transcript is required.

## AI assistance
AI located/read the original sources, synthesized the comparisons, drafted persona hypotheses and proposed decisions, and prepared the repository documentation. Team members remain responsible for validating claims and explaining their own decisions.
No interviews, product tests, teammate contributions, or reviewer results were generated as factual evidence.

## Submission and open work
Repository: https://github.com/vvm3-IT/campus-marketplace
Expected documentation address: https://vvm3-it.github.io/campus-marketplace/ (publication must be verified).
Deployed marketplace: not available; this milestone is research.
Original deadline: November 17, 2026, 8:30 a.m. Eastern. This record was prepared later that day and is not backdated.
Canvas submission has not been performed.
Open: teammates accept invitations and contribute; confirm names and Brand Studio; investigate personas; team adopts/revises proposals; complete course-required peer review separately.

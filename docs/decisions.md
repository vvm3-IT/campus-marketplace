# Positioning & feature decisions

## Two positioning alternatives
<div style="overflow-x:auto"><table><thead><tr><th>Alternative</th><th>Promise</th><th>Benefit hypothesis</th><th>Tradeoff</th></tr></thead><tbody><tr><td>A: Campus convenience</td><td>Used essentials organized around NJIT and local pickup</td><td>More relevant browsing and easier coordination</td><td>Smaller potential inventory and audience</td></tr><tr><td>B: Affordability and reuse</td><td>A student resale destination for passing along useful goods</td><td>Price comparison and reuse may appeal to students</td><td>Savings and environmental outcomes are unmeasured; less distinctive from general marketplaces</td></tr></tbody></table></div>


Proposed decision D1: lead with campus convenience and support it with reuse. Proposed positioning: "For NJIT students buying or selling used essentials, Campus Marketplace organizes listings around campus life and local pickup."
Rationale: campus organization gives a concrete design focus; source patterns support discovery and coordination, but audience demand remains an assumption.
Reconsider if student research shows that delivery or inventory breadth outweighs proximity.


## Finding to decision to planned check
<div style="overflow-x:auto"><table><thead><tr><th>ID and basis</th><th>Proposed decision</th><th>Planned observable check</th><th>Observed result</th></tr></thead><tbody><tr><td>D2: Facebook documentation describes filtering</td><td>Search plus category and maximum-price controls</td><td>Use a fixed fixture set; verify all results match the query, category, and price, including a no-results case</td><td>Not run; no product exists</td></tr><tr><td>D3: OfferUp documents meetup coordination</td><td>Pickup description and public-meetup guidance on item pages</td><td>Open a listing and identify pickup information; ensure a private home address is not required publicly</td><td>Not run</td></tr><tr><td>D4: eBay describes description-accuracy feedback</td><td>Require condition and descriptive item details; defer ratings</td><td>Submit without condition, check a clear error and retained values; complete form and compare detail-page values</td><td>Not run</td></tr><tr><td>D5: P2 assumes availability matters</td><td>Owner-controlled available/sold state</td><td>Mark an item sold; verify it is labeled sold and omitted from default available results</td><td>Not run</td></tr><tr><td>D6: P1 assumes campus focus helps</td><td>Campus-oriented categories and pickup context</td><td>Have a consenting student perform P1's task; record actual completion, confusion, and explanation</td><td>Not run</td></tr></tbody></table></div>


Evidence establishes precedents, not proven effectiveness for this audience. Feature proposals are not implementation claims.

### Chase contribution: D4 recommendation
**Recommendation:** adopt D4's condition/details-first direction and defer seller ratings. eBay documents description accuracy as a feedback dimension, so clear item condition and description are relevant listing information. However, eBay feedback is based on buyer experience with purchases, including a verified-purchase indicator; a new campus marketplace has no such transaction history to substantiate ratings. This avoids implying trust or reputation that has not been earned. The evidence supports the design rationale, not a claim that NJIT students prefer this approach. AI assisted drafting this recommendation; Chase should confirm or revise it before treating it as his own decision.


## Initial feature boundary and alternatives
Proposed essentials: browse/search/filter; listing details; create/edit listing; available/sold status; pickup information.
Defer online checkout, delivery, ratings, and real-time chat until justified and feasible. A contact approach and privacy behavior need a separate decision before implementation.
University email verification is under investigation, not promised. Email ownership does not prove current enrollment or trustworthy conduct.
Static previews must label sample listings and simulated account behavior; do not present them as real transactions.


## Decision log
All decisions below are AI-assisted proposals awaiting identifiable team adoption or revision.
- D1: campus-convenience positioning; rationale and alternative above.
- D2: category/price search; source precedent plus untested audience fit.
- D3: explicit pickup context; investigate locations before suggesting them.
- D4: condition/details first, authentic ratings later.
- D5: sold status; based on seller persona assumption.
- D6: validate campus focus before expanding implementation.
- D7: reuse Brand Studio once supplied; neutral documentation styling is temporary.


See [Varnit's contribution](./varnit.md) for the prepared audience, scope, and positioning rationale.
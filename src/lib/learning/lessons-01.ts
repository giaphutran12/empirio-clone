import type { CaseLesson } from "./types";

// These teaching scores compare the visible choices, not the player's writing or later history.
export const lessons01: Record<string, CaseLesson> = {
  "case-001": {
    skill: "Test the choice buyers will really face",
    takeaway: "Liking a new taste does not mean wanting the old drink gone.",
    choices: {
      replace: { score: 55, verdict: "Risky move", why: "The taste tests support the new drink. They do not show buyers will accept losing the old one.", tradeoff: "One drink keeps the launch simple, but puts all current buyers at risk." },
      alongside: { score: 80, verdict: "Strong move", why: "You act on the taste tests while letting loyal buyers keep their drink.", tradeoff: "Two drinks need more shelf space and work. One may take sales from the other." },
      pilot: { score: 85, verdict: "Strong move", why: "A small sales test checks buying habits while keeping the old drink safe.", tradeoff: "Learning takes time, and one place may not speak for the whole country." },
      hold: { score: 55, verdict: "Risky move", why: "Keeping the old drink avoids harm, but leaves years of lost ground unanswered.", tradeoff: "You gain time to think while your rival can keep winning buyers." },
    },
    history: {
      decision: "Coca-Cola replaced its old formula in April 1985 after taste tests favored the new one.",
      result: "After protests, the old formula returned 79 days later as Coca-Cola Classic. The company then sold both drinks.",
      connection: "The tests measured taste. The protest showed that keeping a familiar drink mattered too. A new recipe and removing the old one were separate bets.",
      sources: [{ title: "Coca-Cola: the New Coke decision and return", url: "https://www.coca-colacompany.com/about-us/history/new-coke-the-most-memorable-marketing-blunder-ever" }],
    },
    check: {
      question: "A shop test gets lots of first sales, but few people buy again. What should you check next?",
      options: [
        { id: "taste", text: "Run only another blind taste test", explanation: "That may explain taste, but still does not show why buyers fail to return." },
        { id: "repeat", text: "Ask recent buyers why they did not return", explanation: "Now the gap is repeat buying. Learn what changed between the first bottle and the next." },
        { id: "ads", text: "Count how many people saw the ads", explanation: "Ad views measure attention. They do not explain why a buyer stops buying." },
      ],
      answerId: "repeat",
    },
    terms: [
      { term: "Flagship", meaning: "The main product people know a company for." },
      { term: "Repeat purchase", meaning: "When a buyer comes back and buys again." },
      { term: "Pilot", meaning: "A small real test before a wider launch." },
    ],
    researchNotes: {
      "review-tests": "Shows how strong the taste preference is, and what it cannot tell you about buying.",
      "review-portfolio": "Shows why different drinks may need different plans instead of one change for everyone.",
      "review-rollout": "Separates adding a drink from removing one. It also shows which launch costs remain unknown.",
      "review-success": "Helps you pick a useful check: whether buyers return, not just whether they try it.",
    },
    eventChange: { optionId: "alongside", title: "Delay the national two-drink launch", description: "Keep both formulas, but move the national launch date to fit production.", tradeoff: "Buyers keep a choice, but a national launch must wait. A small trial can still start sooner.", why: "The factory cannot make both nationally in time. This plan now accepts a delay to preserve choice.", score: 70 },
  },
  "case-002": {
    skill: "Look beyond the purchase price",
    takeaway: "Buying a business means funding its work and keeping the people who make it run.",
    choices: {
      buy: { score: 80, verdict: "Strong move", why: "A checked purchase could add a mail service and team that your stores do not have.", tradeoff: "The asking price is only the start. You also take on a business that is losing money." },
      partner: { score: 85, verdict: "Strong move", why: "A joint trial could test how stores and mail work together before a full purchase.", tradeoff: "Netflix must agree. A trial may not secure its team or stop a rival deal." },
      build: { score: 70, verdict: "Reasonable move", why: "Building gives you control and a way to test mail rentals without buying Netflix.", tradeoff: "You must build the skills and service yourself while Netflix keeps learning." },
      hold: { score: 55, verdict: "Risky move", why: "You avoid a costly purchase, but leave the new rental offer unanswered.", tradeoff: "You keep cash now while a rival learns how to serve people your stores miss." },
    },
    history: {
      decision: "Blockbuster passed on the $50 million proposal in 2000, according to Netflix cofounder Marc Randolph's later account.",
      result: "Netflix stayed independent. Its 2003 annual report records its first yearly profit: $6.5 million, with nearly 1.5 million members.",
      connection: "Mail rentals became a real business. That does not prove a Blockbuster purchase would have worked; funding, people, and running the two services still mattered.",
      sources: [
        { title: "Marc Randolph's firsthand account, 2021", url: "https://tim.blog/2021/02/01/marc-randolph-transcript/" },
        { title: "Netflix 2003 annual report, shareholder letter", url: "https://s22.q4cdn.com/959853165/files/doc_financials/annual_reports/2003AR_print.pdf" },
      ],
    },
    check: {
      question: "The seller cuts its price, but says the key team will leave after the sale. What matters most now?",
      options: [
        { id: "discount", text: "How large the price cut looks", explanation: "A cheap deal can still fail if the people needed to run it leave." },
        { id: "stores", text: "How many stores you already own", explanation: "Store count does not show who can run the new mail service." },
        { id: "team", text: "Who will run and improve the service", explanation: "The offer has changed. Check whether the skills you wanted are still part of the deal." },
      ],
      answerId: "team",
    },
    terms: [
      { term: "Acquisition", meaning: "Buying another business." },
      { term: "Diligence", meaning: "Checking a deal's facts before you agree." },
      { term: "Integration", meaning: "Making two businesses work together." },
    ],
    researchNotes: {
      "review-economics": "Shows how much the firm earned and lost, so the asking price is not your only cost question.",
      "review-financing": "Explains why the seller wants a deal and which cash facts you still need.",
      "review-integration": "Checks who must stay and what work a purchase or joint trial would add.",
      "review-customer": "Compares waiting for mail with making a store trip. Each can suit different people.",
    },
    eventChange: { optionId: "buy", title: "Buy and run it separately at first", description: "Negotiate the purchase with its own leaders and funding, outside store systems for now.", tradeoff: "You secure the business, but cannot count on quick savings from joining the store operation.", why: "Your store team cannot absorb it this cycle. A purchase now needs a separate operating plan.", score: 75 },
  },
  "case-003": {
    skill: "Choose what scarce people and cash should do",
    takeaway: "Keeping every project alive can stop the most useful work from moving forward.",
    choices: {
      exit: { score: 80, verdict: "Strong move", why: "Processors have a proven customer in IBM. A staged DRAM exit can free people for that path.", tradeoff: "You give up a memory business and must help its customers switch. The full costs remain unclear." },
      reinvest: { score: 70, verdict: "Reasonable move", why: "An upgrade could rebuild DRAM's position if it fixes the reason Intel is losing ground.", tradeoff: "Price pressure affects the industry. Spending more does not itself show a path to better returns." },
      balance: { score: 80, verdict: "Strong move", why: "Keeping both paths is defensible while product profits are unclear, if each has a workable scope.", tradeoff: "Shared people and cash can make both programs slower. Keeping options has a cost." },
      hold: { score: 60, verdict: "Reasonable move", why: "Waiting can avoid a rushed exit while the market is weak across many chips.", tradeoff: "Current pressure continues, and you delay changes that could strengthen the business." },
    },
    history: {
      decision: "Intel stopped producing DRAMs in 1985 as it changed its focus and launched new processor products.",
      result: "Intel's history calls 1986 its toughest year. It returned to profit in 1987 as the chip market recovered and the 386 processor gained ground.",
      connection: "A change of focus took time. The market also improved, so the recovery cannot be credited to the DRAM exit alone.",
      sources: [{ title: "Intel corporate history, 1985 to 1987", url: "https://timeline.intel.com/" }],
    },
    check: {
      question: "You choose to leave a product line, then find customers still have supply contracts. What changes?",
      options: [
        { id: "stop", text: "Stop every shipment at once", explanation: "Leaving a product line does not remove promises already made to customers." },
        { id: "plan", text: "Plan the exit around supply promises", explanation: "The direction can stay. The timing and cost must now account for the contracts." },
        { id: "forever", text: "Keep the product forever", explanation: "Contracts need a transition plan. They do not prove the business must stay forever." },
      ],
      answerId: "plan",
    },
    terms: [
      { term: "DRAM", meaning: "A chip that holds working data while a computer runs." },
      { term: "Processor", meaning: "The chip that carries out a computer's instructions." },
      { term: "Opportunity cost", meaning: "The other useful thing you give up when you choose." },
    ],
    researchNotes: {
      "review-market": "Separates a weak chip market from the strengths and weaknesses of Intel's own products.",
      "review-products": "Shows why leaving DRAM does not mean leaving every kind of memory chip.",
      "review-allocation": "Shows which cost and profit facts are missing before moving people and equipment.",
      "review-transition": "Checks customer promises and the cost of changing course rather than assuming an instant exit.",
    },
    eventChange: { optionId: "balance", title: "Keep both at a smaller scope", description: "Reduce the size or stretch the timing of the DRAM and processor programs.", tradeoff: "Both paths stay open, but neither can receive a full major push this cycle.", why: "Operations cannot support both full programs. This choice now requires less work or more time on each.", score: 65 },
  },
  "case-004": {
    skill: "Balance buyer reach with a workable launch",
    takeaway: "More partners can reach more buyers. Fewer partners can make a launch easier to run.",
    choices: {
      launch: { score: 80, verdict: "Strong move", why: "One carrier gives the new phone a clear path to market. Starting with that path is defensible.", tradeoff: "People on other networks may not switch. A clear launch does not reach everyone." },
      open: { score: 80, verdict: "Strong move", why: "More carrier deals could reach buyers who will not switch networks. That is a sound business aim.", tradeoff: "New talks may delay launch or reduce control. Wider reach is useful if those costs stay worthwhile." },
      pilot: { score: 80, verdict: "Strong move", why: "A small paid test checks whether typing, service, and support work for real buyers.", tradeoff: "You learn before a large launch, but invited buyers may not reflect everyone else." },
      hold: { score: 65, verdict: "Reasonable move", why: "More testing may be wise if key parts of daily use are still uncertain.", tradeoff: "Waiting delays real buying feedback. Pick what must be learned before setting a new date." },
    },
    history: {
      decision: "Apple chose Cingular as its exclusive US carrier and launched the first iPhone in June 2007.",
      result: "Apple reported selling its millionth iPhone in September 2007, 74 days after sales began.",
      connection: "The narrow launch reached many buyers. Sales alone do not prove one carrier beat every possible wider deal, or tell us its profit.",
      sources: [
        { title: "Apple's iPhone plan, January 2007", url: "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/" },
        { title: "Apple sells its millionth iPhone, September 2007", url: "https://www.apple.com/newsroom/2007/09/10Apple-Sells-One-Millionth-iPhone/" },
      ],
    },
    check: {
      question: "A second carrier now offers the same launch date and product control, with no added setup cost. What changes?",
      options: [
        { id: "reach", text: "Wider reach becomes more attractive", explanation: "The main added costs have fallen. Recheck the deal using the new facts instead of defending the old plan." },
        { id: "ignore", text: "Ignore it because one carrier was the plan", explanation: "A good plan can change when the tradeoff changes." },
        { id: "profit", text: "The phone is now certain to make money", explanation: "Better reach does not settle device costs, demand, or the price buyers will accept." },
      ],
      answerId: "reach",
    },
    terms: [
      { term: "Carrier", meaning: "The company that connects a phone to a mobile network." },
      { term: "Exclusive deal", meaning: "Only one partner gets the agreed right to sell or supply something." },
      { term: "Margin", meaning: "The part of a sale left after the costs being counted." },
    ],
    researchNotes: {
      carrier: "Shows the partner's large customer base and the buyers that one network leaves out.",
      software: "Checks daily jobs like email and typing, so a new screen does not stand in for useful service.",
      "launch-map": "Shows how launch stages affect support work and the time other markets must wait.",
      "unit-cost": "Explains why a high price is not proof of profit and points to the costs still missing.",
    },
    eventChange: { optionId: "open", title: "Delay training for wider carrier talks", description: "Reopen the deal for more networks and accept that partner store training starts later.", tradeoff: "More buyers may gain access, but the current partner cannot train staff until the launch date is firm.", why: "Wider access remains defensible. The visible update adds a concrete cost: store training must wait while talks continue.", score: 70 },
  },
  "case-005": {
    skill: "Price the daily benefit for a clear buyer",
    takeaway: "A large feature list matters only when it makes a buyer's life easier.",
    choices: {
      premium: { score: 80, verdict: "Strong move", why: "A pocket library and easy music copying give compatible computer owners a clear reason to consider the $399 player.", tradeoff: "The benefit may earn a high price, but the case has no proof of how many people will pay." },
      lower: { score: 65, verdict: "Reasonable move", why: "A lower price could help people try the player. Whether extra sales cover the cut is still unclear.", tradeoff: "Each sale brings less money before costs. More buyers do not always mean more profit." },
      bundle: { score: 80, verdict: "Strong move", why: "A computer bundle reaches buyers who can use the easy sync right away.", tradeoff: "A bundle may hide weak demand for the player alone and narrows the first buyer group." },
      hold: { score: 70, verdict: "Reasonable move", why: "Price and battery tests can help check the promise before asking buyers for $399.", tradeoff: "Waiting misses the planned sales window and delays learning from paid use." },
    },
    history: {
      decision: "Apple introduced iPod at $399 in October 2001, built around a pocket music library and fast copying from a Mac.",
      result: "By April 2007, Apple reported 100 million iPods sold. That total covered more than ten models introduced over five and a half years.",
      connection: "The first offer grew into a wider family. Later sales do not prove the first price or Mac-only offer would suit every buyer.",
      sources: [
        { title: "Apple presents iPod, October 2001", url: "https://www.apple.com/newsroom/2001/10/23Apple-Presents-iPod/" },
        { title: "Apple reports 100 million iPods sold, April 2007", url: "https://www.apple.com/newsroom/2007/04/09100-Million-iPods-Sold/" },
      ],
    },
    check: {
      question: "A buyer loves the player but owns a computer it cannot sync with. What should you learn first?",
      options: [
        { id: "songs", text: "Whether it could store more songs", explanation: "More songs do not fix the buyer's problem getting music onto the device." },
        { id: "discount", text: "How low a price would end all doubt", explanation: "A cheaper player can still be hard to use with the wrong computer." },
        { id: "access", text: "Whether a simple sync path can serve that buyer", explanation: "The daily benefit is blocked by setup. Check that barrier before changing features or price." },
      ],
      answerId: "access",
    },
    terms: [
      { term: "Sync", meaning: "Copy changes so music or files match across devices." },
      { term: "Bundle", meaning: "Two or more products sold together as one offer." },
      { term: "Premium price", meaning: "A high price asked for a benefit buyers value." },
    ],
    researchNotes: {
      speed: "Checks whether the claimed copying speed supports the promise of less work for music fans.",
      battery: "Separates the stated battery life from what real daily use might deliver.",
      kit: "Shows what buyers get and which computer owners can use the offer easily.",
      "price-floor": "Shows why a price cut needs both buyer evidence and cost facts.",
    },
    eventChange: { optionId: "premium", title: "Commit the display to easy music", description: "Keep $399 and give stores one display about carrying and syncing a full music library.", tradeoff: "The value message gets the display. There is no time for a second display built around low price.", why: "Stores can build only one display. This move commits their time to the benefit that supports the higher price.", score: 80 },
  },
  "case-006": {
    skill: "Change the offer without losing buyer trust",
    takeaway: "A growing paid plan is a useful signal. Also check what each buyer loses when the old deal ends.",
    choices: {
      switch: { score: 80, verdict: "Strong move", why: "Paid membership is growing. Sending new features to that plan gives the team a clear next path.", tradeoff: "People who buy one version for years may dislike ongoing fees, even while the current version stays on sale." },
      both: { score: 75, verdict: "Reasonable move", why: "Two offers let buyers choose whether they value ownership or regular updates.", tradeoff: "The team must build and support two release paths instead of focusing on one." },
      phase: { score: 80, verdict: "Strong move", why: "Moving a small tool group can test renewals before changing the whole suite.", tradeoff: "The smaller move takes longer, and one tool's buyers may differ from the rest." },
      hold: { score: 65, verdict: "Reasonable move", why: "Keeping the mix buys time to study which buyers will pay again.", tradeoff: "The split roadmap continues, despite clear early growth in paid membership." },
    },
    history: {
      decision: "In May 2013, Adobe put new creative features into Creative Cloud subscriptions while keeping Creative Suite 6 available as an owned license.",
      result: "Adobe reported 3.454 million paid Creative Cloud subscriptions at the end of 2014, up from 1.439 million at the end of 2013.",
      connection: "Many buyers adopted the plan. A growing member count still does not show whether every buyer was happy or which benefit made them stay.",
      sources: [
        { title: "Adobe 2013 annual report, Creative Cloud strategy", url: "https://www.adobe.com/content/dam/cc/en/investor-relations/pdfs/ADBE-10K-FY13-FINAL.pdf" },
        { title: "Adobe 2014 annual report, paid subscriptions", url: "https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-10k-fy14-final.pdf" },
      ],
    },
    check: {
      question: "New sign-ups rise, but many buyers leave when the first term ends. Which measure helps most now?",
      options: [
        { id: "downloads", text: "Free downloads of the app", explanation: "Downloads show interest. They do not explain whether paying buyers stay." },
        { id: "renew", text: "Renewals and reasons for leaving", explanation: "The new gap is lasting value. Learn who stays, who leaves, and why." },
        { id: "features", text: "The number of features released", explanation: "More features do not prove that people want to keep paying for them." },
      ],
      answerId: "renew",
    },
    terms: [
      { term: "Subscription", meaning: "Regular payments to keep using a product or service." },
      { term: "Renewal", meaning: "Paying again when the current term ends." },
      { term: "Perpetual license", meaning: "The right to keep using a bought software version under its terms." },
    ],
    researchNotes: {
      channel: "Shows where subscriptions are popular without treating website buyers as every kind of customer.",
      service: "Explains the new benefits so you can ask which ones are worth an ongoing fee.",
      results: "Separates company-wide profit from the paid plan's own health.",
      transition: "Shows why buyers who keep old versions may react differently from people who want every update.",
    },
    eventChange: { optionId: "switch", title: "Set file-access terms before moving clients", description: "Move new features to the plan after sales can explain what happens to old files when payments stop.", tradeoff: "The change needs a clear answer for the large client before sales can ask it to move.", why: "The client raised a specific need. Clear file-access terms are now part of making this offer ready to sell.", score: 80 },
  },
  "case-007": {
    skill: "Match an open offer with a support promise",
    takeaway: "Sharing code opens a door. People also need to know who will fix it when it breaks.",
    choices: {
      open: { score: 80, verdict: "Strong move", why: "The compiler and foundation give a starting point for inviting outside work on the server engine.", tradeoff: "Code review and support need people. Outside interest does not mean that work will be free." },
      read: { score: 70, verdict: "Reasonable move", why: "Letting people inspect the code can build trust while changes stay with your team.", tradeoff: "Outside users can see problems, but cannot help shape fixes on the same terms." },
      port: { score: 75, verdict: "Reasonable move", why: "Official versions for more systems can meet users where they already work.", tradeoff: "Your team carries the work and cost without help from outside code changes." },
      hold: { score: 60, verdict: "Reasonable move", why: "The smaller open projects can teach you how to handle outside work before widening the offer.", tradeoff: "The server engine stays closed, so interested users on other systems keep waiting." },
    },
    history: {
      decision: "Microsoft announced in November 2014 that it would open the .NET server software and bring it to Linux and Mac as well as Windows.",
      result: "In June 2016, .NET Core 1.0 shipped for Windows, macOS, and Linux, with Microsoft support and a stated schedule for fixes.",
      connection: "The plan became usable software with a support owner. Opening code was one step; making it run and keeping it supported took more work.",
      sources: [
        { title: "Microsoft's .NET decision, November 2014", url: "https://news.microsoft.com/source/2014/11/12/microsoft-takes-net-open-source-and-cross-platform-adds-new-development-capabilities-with-visual-studio-2015-net-2015-and-visual-studio-online/" },
        { title: ".NET Core 1.0 release and support, June 2016", url: "https://devblogs.microsoft.com/dotnet/announcing-net-core-1-0/" },
      ],
    },
    check: {
      question: "Outside users send many useful fixes, but your team cannot review them fast enough. What helps most?",
      options: [
        { id: "review", text: "Set review owners and a clear first scope", explanation: "Outside help still needs a safe path into the product. Owners and scope make that work manageable." },
        { id: "accept", text: "Accept every fix right away", explanation: "Useful ideas still need checks before they reach people who depend on the software." },
        { id: "stars", text: "Count how many people like the project", explanation: "Interest does not clear the review queue or make fixes safe to ship." },
      ],
      answerId: "review",
    },
    terms: [
      { term: "Open source", meaning: "Code shared under terms that allow people to use, change, and share it." },
      { term: "Port", meaning: "A version made to run on another kind of system." },
      { term: "Governance", meaning: "Rules for who makes decisions and handles disagreements." },
    ],
    researchNotes: {
      extensions: "Shows what outside tool makers can already build, without assuming they will maintain the engine.",
      governance: "Shows who the foundation serves and which rules still need to be set.",
      "cloud-fit": "Links wider developer use to possible paid services while keeping that business link uncertain.",
      support: "Shows why publishing code and supporting other systems are separate jobs.",
    },
    eventChange: { optionId: "open", title: "Name server support before inviting users", description: "Assign bug-fix owners for the first server system, then open that supported scope to outside work.", tradeoff: "The first scope is narrower, and your team takes a clear support duty before the user will test.", why: "The user will not test without a bug-fix owner. This move adds that duty before asking for adoption.", score: 85 },
  },
  "case-008": {
    skill: "Judge the whole buying and using experience",
    takeaway: "A reader, its books, and the path to buying them must work together.",
    choices: {
      device: { score: 80, verdict: "Strong move", why: "A reader with wireless book buying joins the device and store into one clear offer.", tradeoff: "At $399, buyers need books they want and service that works. A large catalog alone is not enough." },
      software: { score: 70, verdict: "Reasonable move", why: "Software on computers can test paid digital reading without building a new device business first.", tradeoff: "Computer reading does not test the value of a light, mobile reader with a different screen." },
      pilot: { score: 85, verdict: "Strong move", why: "A limited run can test repeat book buying and support needs before a wider device launch.", tradeoff: "A small group may read differently, and a slower rollout may give publishers less reason to join." },
      hold: { score: 60, verdict: "Reasonable move", why: "Waiting protects the print business while you improve a costly new offer.", tradeoff: "It also delays learning from real digital buyers and leaves the reader's promise untested." },
    },
    history: {
      decision: "Amazon launched Kindle in November 2007 for $399, pairing a reading device with wireless delivery and a digital bookstore.",
      result: "In May 2011, Amazon said it sold 105 paid Kindle books for every 100 print books on Amazon.com since April 1.",
      connection: "Digital book buying grew beyond the first device launch. The offer and device prices changed along the way; this comparison does not measure Kindle profit.",
      sources: [
        { title: "Amazon introduces Kindle, November 2007", url: "https://press.aboutamazon.com/2007/11/introducing-amazon-kindle" },
        { title: "Amazon Kindle and print book sales, May 2011", url: "https://press.aboutamazon.com/2011/5/amazon-com-now-selling-more-kindle-books-than-print-books" },
      ],
    },
    check: {
      question: "The reader sells well, but most owners buy no second book. What should you look at first?",
      options: [
        { id: "screen", text: "Make the device case a new color", explanation: "That may attract attention, but it does not explain why owners stopped buying books." },
        { id: "sales", text: "Only count first-week device sales", explanation: "A strong first sale can hide a weak habit after people start using the reader." },
        { id: "books", text: "Check wanted titles and the next-book buying flow", explanation: "The next purchase tests the whole service. Learn whether content, price, or buying steps get in the way." },
      ],
      answerId: "books",
    },
    terms: [
      { term: "Catalog", meaning: "The set of books or other products a store offers." },
      { term: "Repeat use", meaning: "Coming back to use a product after the first try." },
      { term: "Publisher", meaning: "A business that helps bring books to readers and holds rights to sell them." },
    ],
    researchNotes: {
      connection: "Shows who pays for wireless access and why a free buyer benefit still has a business cost.",
      books: "Checks wanted titles and samples, which tell you more than the catalog total alone.",
      speed: "Checks whether fast buying is a supported claim and where weak signal may hurt the experience.",
      economics: "Adds book pricing while showing why hardware and book profits still need separate cost facts.",
    },
    eventChange: { optionId: "device", title: "Launch with the confirmed books", description: "Ship the reader, remove the delayed title from the launch promise, and show the live catalog.", tradeoff: "The device can still ship, but you cannot promise the missing book to its fans.", why: "One title will miss launch. An honest catalog keeps the launch possible without selling buyers a book they cannot get.", score: 80 },
  },
  "case-009": {
    skill: "Check the cost of each kind of member",
    takeaway: "One fee can hide very different costs. Learn who joins and how their buying changes.",
    choices: {
      unlimited: { score: 80, verdict: "Strong move", why: "A simple $79 fee removes a shipping hurdle each time a buyer considers an order.", tradeoff: "Frequent small orders may cost more to deliver. More orders need to bring enough extra profit." },
      minimum: { score: 70, verdict: "Reasonable move", why: "An order minimum may keep delivery costs down by encouraging larger baskets.", tradeoff: "Buyers still have to wait or add items, so the membership solves less of their problem." },
      pilot: { score: 85, verdict: "Strong move", why: "A limited test can compare extra item profit with real delivery bills before a wider launch.", tradeoff: "The test needs frequent buyers too. A group of light users could hide the cost risk." },
      hold: { score: 60, verdict: "Reasonable move", why: "Keeping current charges avoids a new promise before its costs are clear.", tradeoff: "It leaves the repeat-order idea untested despite the company's ability to fund learning." },
    },
    history: {
      decision: "Amazon launched Prime in February 2005 at $79 a year, with unlimited two-day shipping and no order minimum.",
      result: "In its 2017 shareholder letter, Amazon reported more than 100 million paid Prime members worldwide, thirteen years after launch.",
      connection: "The promise attracted many members as benefits and reach grew. Member count alone does not show the profit from the original shipping plan.",
      sources: [
        { title: "Amazon Prime launch, February 2005", url: "https://press.aboutamazon.com/2005/2/amazon-com-announces-record-free-cash-flow-fueled-by-lower-prices-and-free-shipping-introduces-new-express-shipping-program-amazon-prime" },
        { title: "Amazon 2017 shareholder letter, Prime membership", url: "https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders" },
      ],
    },
    check: {
      question: "Members place twice as many orders, but delivery bills rise faster than item profit. What should you check?",
      options: [
        { id: "profit", text: "Profit after shipping for each type of member", explanation: "More orders are useful only if the full economics work. Heavy and light users can have very different costs." },
        { id: "orders", text: "Orders alone, since they doubled", explanation: "Order growth can still leave less money after delivery costs." },
        { id: "views", text: "How many people viewed the membership page", explanation: "Interest in joining does not show whether the members you have are costly to serve." },
      ],
      answerId: "profit",
    },
    terms: [
      { term: "Free cash flow", meaning: "Cash left from running the business after spending on buildings and equipment." },
      { term: "Order minimum", meaning: "The least a buyer must spend to get an offer." },
      { term: "Split shipment", meaning: "One order sent in more than one package." },
    ],
    researchNotes: {
      household: "Shows how one fee can cover several people and more deliveries.",
      upgrade: "Separates the included shipping promise from a faster service that still has a charge.",
      baseline: "Shows room to fund a test without treating past company cash as proof the new plan pays.",
      cohorts: "Shows why frequent buyers may join first and why an average can hide expensive users.",
    },
    eventChange: { optionId: "unlimited", title: "Allow each small item to ship when ready", description: "Keep no order minimum and accept separate boxes instead of relying on grouped deliveries.", tradeoff: "The promise stays simple, but the plan must work without savings from waiting to combine boxes.", why: "Operations has made the cost choice explicit. Keeping full freedom means accepting separate shipments in the plan.", score: 75 },
  },
  "case-010": {
    skill: "Choose the work before choosing the cuts",
    takeaway: "A smaller company needs a clear job to do and a fair plan for people leaving or staying.",
    choices: {
      focus: { score: 85, verdict: "Strong move", why: "A much smaller revenue outlook calls for a clear core. Ending side work matches cuts to that plan.", tradeoff: "You lose people and some future options. The remaining work still needs enough skills and support." },
      across: { score: 55, verdict: "Risky move", why: "Equal cuts are easy to describe, but do not show which work the smaller business needs.", tradeoff: "Every team may be left short, including the teams that keep the main service working." },
      temporary: { score: 75, verdict: "Reasonable move", why: "Agreed leave or reduced hours could save cash while keeping skills for a recovery.", tradeoff: "No one knows when travel returns. Temporary savings may not last long enough." },
      hold: { score: 60, verdict: "Reasonable move", why: "New funding gives a reason to check the cash plan before making more permanent cuts.", tradeoff: "The money raised does not tell you how long it lasts. Waiting needs a clear cash review." },
    },
    history: {
      decision: "In May 2020, Airbnb announced nearly 1,900 job cuts and a narrower focus, along with support for people leaving.",
      result: "Airbnb reported that full-year 2021 revenue was 25% above 2019, as travel and bookings recovered.",
      connection: "The business recovered after the cuts, but changing travel demand also mattered. This does not prove every cut was needed or that staff costs alone drove recovery.",
      sources: [
        { title: "Brian Chesky's staff message, May 2020", url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky" },
        { title: "Airbnb 2021 full-year results, February 2022", url: "https://news.airbnb.com/airbnb-fourth-quarter-and-full-year-2021-financial-results" },
      ],
    },
    check: {
      question: "Bookings now recover faster than expected, but your support team cannot keep up. What should change first?",
      options: [
        { id: "same", text: "Keep every cut just because it was agreed", explanation: "The plan answered an older forecast. New demand is a reason to check it again." },
        { id: "skills", text: "Review the skills needed for the bookings now arriving", explanation: "Start with the work again. Protecting service may require changing which roles you keep or add." },
        { id: "all", text: "Restart every side project immediately", explanation: "More bookings do not prove every old project belongs in the business." },
      ],
      answerId: "skills",
    },
    terms: [
      { term: "Core business", meaning: "The main work the company exists to do." },
      { term: "Runway", meaning: "How long available cash lasts at the rate it is being used." },
      { term: "Severance", meaning: "Pay or support offered to someone whose job ends." },
    ],
    researchNotes: {
      size: "Shows the people affected and why new funding alone cannot tell you how long cash will last.",
      scope: "Maps side work so cuts can follow a business plan instead of a flat headcount target.",
      demand: "Shows the recovery view while keeping a forecast separate from actual bookings.",
      care: "Checks what people leaving and staying need, including local terms that the case does not provide.",
    },
    eventChange: { optionId: "focus", title: "Set the work and staff message together", description: "Name the work that stops, when role decisions come, and what support staff can expect before making cuts.", tradeoff: "The plan needs one clear message now. Rumors make vague or piecemeal announcements more harmful.", why: "Managers report spreading rumors. A focused cut now includes clear timing and support for both groups of staff.", score: 85 },
  },
};

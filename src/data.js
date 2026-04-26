/* ================================================
   ASHBURN COMMUNITY RESOURCE HUB
   data.js — Community Resource Data
   
   HOW THIS FILE WORKS:
   - All community resources are stored in one array
     called RESOURCES (exported at the bottom)
   - Each resource is a JavaScript object with
     consistent properties (name, category, etc.)
   - main.js imports this array and uses it to:
       1. Render all the resource cards on the page
       2. Filter cards when a category button is clicked
       3. Search cards when the user types in the search bar
   
   HOW TO ADD A NEW RESOURCE:
   Copy one of the objects below, paste it at the
   end of the array (before the closing bracket),
   and fill in the real details. Make sure the
   category matches one of the six options exactly:
     "Food Assistance"
     "Health Services"
     "Youth & Education"
     "Housing & Shelter"
     "Support Services"
     "Community Events"
================================================ */

/* 
   Each resource object has these properties:
   
   id          — unique number, used as a key by JS
   name        — full name of the organization/resource
   category    — must match one of the 6 categories above
   description — 1-2 sentences describing what they offer
   phone       — contact phone number (or null if none)
   address     — physical address (or null if online-only)
   website     — full URL starting with https:// (or null)
   tags        — array of keywords for the search feature
                 (the more tags, the better the search works)
*/

export const RESOURCES = [

  /* ================================================
     CATEGORY 1: FOOD ASSISTANCE
     Resources that help residents access food,
     groceries, hot meals, and nutrition programs.
  ================================================ */

  {
    id: 1,
    name: "Loudoun Hunger Relief",
    category: "Food Assistance",
    description:
      "Loudoun Hunger Relief operates multiple food pantries across the county, providing nutritious groceries and emergency food boxes to families in need. No income verification is required for first-time visits.",
    phone: "(703) 737-8005",
    address: "Leesburg, Sterling & Ashburn locations",
    website: "https://www.loudounhungerrelief.com",
    tags: ["food", "pantry", "groceries", "hunger", "free food", "emergency", "family", "leesburg", "sterling", "ashburn"],
  },

  {
    id: 2,
    name: "AFAC – Arlington Food Assistance Center (Ashburn Branch)",
    category: "Food Assistance",
    description:
      "AFAC provides free weekly groceries to income-eligible residents, including fresh produce, proteins, dairy, and shelf-stable items. Client choice model allows families to select foods that fit their needs.",
    phone: "(571) 323-0146",
    address: "44927 George Washington Blvd, Ashburn, VA 20147",
    website: "https://www.afac.org",
    tags: ["food", "groceries", "fresh produce", "free", "weekly", "ashburn", "income eligible", "client choice"],
  },

  {
    id: 3,
    name: "Corner of Hope Food Pantry",
    category: "Food Assistance",
    description:
      "A community-run food pantry based in Ashburn offering supplemental groceries to local families. Volunteers pack personalized bags based on household size and dietary restrictions.",
    phone: "(703) 726-0007",
    address: "43670 Greenwood Farm Sq, Ashburn, VA 20148",
    website: "https://www.cornerofhope.org",
    tags: ["food", "pantry", "ashburn", "community", "volunteers", "groceries", "family", "dietary"],
  },

  {
    id: 4,
    name: "Blue Ridge Area Food Bank – Loudoun Branch",
    category: "Food Assistance",
    description:
      "The Blue Ridge Area Food Bank distributes millions of pounds of food annually across Virginia. Their Loudoun County partner network includes dozens of local pantries and meal programs.",
    phone: "(540) 248-3663",
    address: "Serving all of Loudoun County through partner agencies",
    website: "https://www.brafb.org",
    tags: ["food bank", "food", "hunger", "meals", "loudoun", "distribution", "virginia", "partner agencies"],
  },

  {
    id: 5,
    name: "Loudoun County Senior Nutrition Program",
    category: "Food Assistance",
    description:
      "Provides hot, nutritious meals to Loudoun County seniors through congregate dining sites and Meals on Wheels home delivery. Open to adults 60 and older regardless of income.",
    phone: "(703) 771-5200",
    address: "Multiple senior center locations across Loudoun County",
    website: "https://www.loudoun.gov/seniors",
    tags: ["seniors", "elderly", "meals", "nutrition", "meals on wheels", "hot food", "delivery", "60+", "aging"],
  },

  {
    id: 6,
    name: "LINK of Loudoun – Community Food Pantry",
    category: "Food Assistance",
    description:
      "LINK of Loudoun provides emergency financial assistance and food support to county residents facing a crisis. Their food pantry offers a 3-day supply of groceries per visit.",
    phone: "(703) 779-8700",
    address: "39 W Loudoun St, Leesburg, VA 20175",
    website: "https://www.linkofloudoun.org",
    tags: ["food", "emergency", "crisis", "leesburg", "pantry", "assistance", "link", "financial"],
  },


  /* ================================================
     CATEGORY 2: HEALTH SERVICES
     Free or low-cost medical, dental, mental health,
     vision, and prescription assistance.
  ================================================ */

  {
    id: 7,
    name: "Loudoun Free Clinic",
    category: "Health Services",
    description:
      "Provides free primary care, dental, vision, mental health counseling, and prescription assistance to uninsured and underinsured Loudoun County residents. Entirely volunteer-run and community-funded.",
    phone: "(703) 779-7699",
    address: "607 S King St, Leesburg, VA 20175",
    website: "https://www.loudounfreeclinic.org",
    tags: ["free clinic", "medical", "dental", "vision", "mental health", "prescriptions", "uninsured", "healthcare", "leesburg", "volunteer"],
  },

  {
    id: 8,
    name: "Inova Loudoun Hospital Community Health Programs",
    category: "Health Services",
    description:
      "Inova Loudoun offers free community health screenings, wellness classes, and financial assistance programs for qualifying patients. Programs include blood pressure checks, diabetes education, and more.",
    phone: "(703) 858-6000",
    address: "44045 Riverside Pkwy, Leesburg, VA 20176",
    website: "https://www.inova.org/locations/inova-loudoun-hospital",
    tags: ["hospital", "health", "screenings", "wellness", "diabetes", "blood pressure", "financial assistance", "inova", "leesburg"],
  },

  {
    id: 9,
    name: "Loudoun County Mental Health Services",
    category: "Health Services",
    description:
      "Loudoun County's Community Services Board provides mental health evaluations, crisis intervention, outpatient therapy, and substance use treatment on a sliding scale fee based on income.",
    phone: "(703) 777-0320",
    address: "102 Heritage Way NE, Leesburg, VA 20176",
    website: "https://www.loudoun.gov/mentalhealth",
    tags: ["mental health", "therapy", "counseling", "crisis", "substance use", "sliding scale", "csb", "leesburg", "psychology", "behavioral health"],
  },

  {
    id: 10,
    name: "Virginia Medicaid & FAMIS – Loudoun Enrollment",
    category: "Health Services",
    description:
      "Free or low-cost health insurance for qualifying Virginia residents including children, pregnant women, adults, and seniors. Enrollment assistance is available at the Loudoun County Department of Social Services.",
    phone: "(703) 771-5700",
    address: "102 Heritage Way NE, Leesburg, VA 20176",
    website: "https://www.coverva.org",
    tags: ["medicaid", "insurance", "FAMIS", "health coverage", "free insurance", "children", "low income", "enrollment", "social services"],
  },

  {
    id: 11,
    name: "Planned Parenthood of Northern Virginia – Ashburn",
    category: "Health Services",
    description:
      "Offers reproductive health services including STI testing and treatment, contraception, cancer screenings, and pregnancy testing. Services available on a sliding scale fee.",
    phone: "(703) 729-6367",
    address: "44110 Ashburn Shopping Plaza, Ashburn, VA 20147",
    website: "https://www.plannedparenthood.org",
    tags: ["reproductive health", "STI", "contraception", "cancer screening", "women's health", "sliding scale", "ashburn", "pregnancy"],
  },

  {
    id: 12,
    name: "NAMI Northern Virginia – Crisis & Support Line",
    category: "Health Services",
    description:
      "The National Alliance on Mental Illness (NAMI) Northern Virginia chapter offers a free helpline, peer support groups, and family education programs for those affected by mental illness.",
    phone: "(703) 534-5344",
    address: "Online and phone-based services available countywide",
    website: "https://www.naminorthernvirginia.org",
    tags: ["mental health", "NAMI", "support group", "crisis line", "family", "peer support", "helpline", "northern virginia"],
  },


  /* ================================================
     CATEGORY 3: YOUTH & EDUCATION
     Programs, tutoring, mentorship, and enrichment
     for children, teens, and young adults.
  ================================================ */

  {
    id: 13,
    name: "Boys & Girls Club of Loudoun County",
    category: "Youth & Education",
    description:
      "After-school programs, summer camps, tutoring, STEM activities, sports, and mentorship for youth ages 6–18. Membership is kept affordable to ensure all children can access programs regardless of family income.",
    phone: "(703) 771-1088",
    address: "Multiple sites across Loudoun County",
    website: "https://www.bgcloudoun.org",
    tags: ["youth", "after school", "summer camp", "tutoring", "STEM", "sports", "mentorship", "children", "teens", "6-18"],
  },

  {
    id: 14,
    name: "Loudoun County Public Library – Free Programs",
    category: "Youth & Education",
    description:
      "LCPL offers free storytimes, homework help, STEM workshops, teen programs, ESL classes, and computer literacy courses at branches across Loudoun County. Library cards are free to all county residents.",
    phone: "(703) 777-0368",
    address: "Multiple branches countywide — nearest: 43316 Hay Rd, Ashburn",
    website: "https://www.library.loudoun.gov",
    tags: ["library", "free", "storytime", "homework help", "STEM", "ESL", "computer", "teens", "children", "adults", "ashburn", "literacy"],
  },

  {
    id: 15,
    name: "LCPS Community Learning Centers",
    category: "Youth & Education",
    description:
      "Loudoun County Public Schools runs free after-school tutoring and enrichment programs at select elementary and middle schools for students who need academic support.",
    phone: "(571) 252-1000",
    address: "Various LCPS school locations across Loudoun County",
    website: "https://www.lcps.org",
    tags: ["tutoring", "after school", "students", "LCPS", "academic", "free", "elementary", "middle school", "enrichment"],
  },

  {
    id: 16,
    name: "Northern Virginia Family Service – Head Start",
    category: "Youth & Education",
    description:
      "Free early childhood education and family support services for income-eligible children ages 0–5 in Northern Virginia. Head Start combines preschool education with health screenings and family wellness.",
    phone: "(703) 385-3267",
    address: "Serving Northern Virginia including Loudoun County",
    website: "https://www.nvfs.org",
    tags: ["head start", "preschool", "early childhood", "children", "ages 0-5", "free education", "family", "income eligible", "northern virginia"],
  },

  {
    id: 17,
    name: "Loudoun Literacy Council",
    category: "Youth & Education",
    description:
      "Provides free one-on-one tutoring for adults and families to improve reading, writing, math, and English language skills. Volunteer tutors are matched with learners countywide.",
    phone: "(703) 777-5856",
    address: "102 North Street NW, Leesburg, VA 20176",
    website: "https://www.loudounliteracy.org",
    tags: ["literacy", "reading", "writing", "math", "adult education", "english", "tutoring", "free", "leesburg", "ESL", "volunteer"],
  },

  {
    id: 18,
    name: "Ashburn Youth Athletic Association (AYAA)",
    category: "Youth & Education",
    description:
      "Non-profit youth sports organization offering affordable baseball, softball, soccer, and basketball leagues for children ages 4–18 in the Ashburn community.",
    phone: "(571) 333-2922",
    address: "Ashburn Village Sports Pavilion, Ashburn, VA 20147",
    website: "https://www.ayaa.org",
    tags: ["sports", "youth", "baseball", "soccer", "basketball", "softball", "leagues", "affordable", "ashburn", "4-18", "non-profit"],
  },


  /* ================================================
     CATEGORY 4: HOUSING & SHELTER
     Emergency shelter, transitional housing,
     rental assistance, and housing counseling.
  ================================================ */

  {
    id: 19,
    name: "LAWS – Loudoun Abused Women's Shelter",
    category: "Housing & Shelter",
    description:
      "Provides emergency shelter, transitional housing, legal advocacy, and counseling for survivors of domestic violence and sexual assault in Loudoun County. Services are free and confidential.",
    phone: "(703) 777-6552",
    address: "Confidential location, Loudoun County, VA",
    website: "https://www.lawshelter.org",
    tags: ["domestic violence", "shelter", "women", "abuse", "safe house", "legal advocacy", "counseling", "confidential", "sexual assault", "emergency"],
  },

  {
    id: 20,
    name: "Loudoun County Rental & Mortgage Assistance",
    category: "Housing & Shelter",
    description:
      "The Loudoun County Department of Family Services administers emergency rental and mortgage assistance programs for qualifying residents facing eviction or foreclosure due to a financial hardship.",
    phone: "(703) 771-5700",
    address: "102 Heritage Way NE, Leesburg, VA 20176",
    website: "https://www.loudoun.gov/housingassistance",
    tags: ["rental assistance", "mortgage", "eviction", "foreclosure", "housing", "financial hardship", "emergency", "leesburg", "county"],
  },

  {
    id: 21,
    name: "Habitat for Humanity – Loudoun Valley",
    category: "Housing & Shelter",
    description:
      "Habitat for Humanity partners with income-qualified families to build and rehabilitate affordable homes. Also offers a ReStore home improvement outlet with proceeds funding housing programs.",
    phone: "(703) 443-0360",
    address: "606 S. King St, Leesburg, VA 20175",
    website: "https://www.loudounhabitat.org",
    tags: ["habitat for humanity", "affordable housing", "homeownership", "build", "income eligible", "restore", "leesburg", "construction"],
  },

  {
    id: 22,
    name: "Open Door Shelter – Leesburg",
    category: "Housing & Shelter",
    description:
      "Emergency overnight shelter for homeless adults in Loudoun County, providing a safe place to sleep, hot meals, showers, and case management to help residents secure stable housing.",
    phone: "(703) 777-2211",
    address: "Leesburg, VA — call for current location",
    website: "https://www.loudoun.gov/homeless",
    tags: ["homeless", "shelter", "emergency", "overnight", "meals", "showers", "case management", "adults", "leesburg", "housing"],
  },


  /* ================================================
     CATEGORY 5: SUPPORT SERVICES
     Financial aid, legal help, disability services,
     veteran support, and general social services.
  ================================================ */

  {
    id: 23,
    name: "Loudoun County Department of Family Services",
    category: "Support Services",
    description:
      "Administers a wide range of assistance programs including SNAP (food stamps), Medicaid, TANF cash assistance, childcare subsidies, and emergency services for Loudoun County residents.",
    phone: "(703) 771-5700",
    address: "102 Heritage Way NE, Leesburg, VA 20176",
    website: "https://www.loudoun.gov/familyservices",
    tags: ["SNAP", "food stamps", "medicaid", "TANF", "childcare", "cash assistance", "social services", "family", "leesburg", "emergency"],
  },

  {
    id: 24,
    name: "Loudoun Volunteer Caregivers",
    category: "Support Services",
    description:
      "Connects seniors and adults with disabilities to trained volunteers who provide free rides to medical appointments, prescription pickups, and friendly visitor programs across Loudoun County.",
    phone: "(703) 779-7575",
    address: "606 S King St Ste 400, Leesburg, VA 20175",
    website: "https://www.loudounvolunteercaregivers.org",
    tags: ["seniors", "elderly", "volunteers", "rides", "transportation", "medical", "disability", "friendly visitor", "leesburg", "caregivers"],
  },

  {
    id: 25,
    name: "Legal Services of Northern Virginia – Loudoun Office",
    category: "Support Services",
    description:
      "Provides free civil legal aid to low-income residents including help with housing disputes, family law, public benefits, immigration, and consumer issues. Income guidelines apply.",
    phone: "(703) 778-6800",
    address: "29 Waterloo St NW, Warrenton (serves Loudoun residents)",
    website: "https://www.lsnv.org",
    tags: ["legal aid", "free legal", "housing dispute", "family law", "immigration", "benefits", "low income", "civil", "northern virginia"],
  },

  {
    id: 26,
    name: "LINK of Loudoun – Emergency Financial Assistance",
    category: "Support Services",
    description:
      "LINK of Loudoun helps county residents avoid utility shutoffs, evictions, and medical debt through emergency financial assistance grants. Short-term help for people facing unexpected hardship.",
    phone: "(703) 779-8700",
    address: "39 W Loudoun St, Leesburg, VA 20175",
    website: "https://www.linkofloudoun.org",
    tags: ["financial assistance", "utilities", "eviction", "emergency", "grant", "hardship", "rent", "electric", "leesburg", "crisis"],
  },

  {
    id: 27,
    name: "Loudoun County Veterans Services",
    category: "Support Services",
    description:
      "Connects Loudoun County veterans and their families to VA benefits, healthcare, housing assistance, employment support, and emergency financial aid. Free claims assistance available.",
    phone: "(703) 777-0353",
    address: "1 Harrison St SE, Leesburg, VA 20175",
    website: "https://www.loudoun.gov/veterans",
    tags: ["veterans", "VA", "military", "benefits", "healthcare", "housing", "employment", "claims", "leesburg", "service members"],
  },

  {
    id: 28,
    name: "Loudoun County Disability Services Board",
    category: "Support Services",
    description:
      "Advocates for and connects individuals with physical, intellectual, and developmental disabilities to county resources, employment programs, recreational opportunities, and independent living support.",
    phone: "(703) 771-5066",
    address: "1 Harrison St SE, Leesburg, VA 20175",
    website: "https://www.loudoun.gov/disability",
    tags: ["disability", "developmental", "intellectual", "physical", "employment", "recreation", "independent living", "advocacy", "leesburg"],
  },


  /* ================================================
     CATEGORY 6: COMMUNITY EVENTS
     Recurring programs, seasonal events, and
     community engagement opportunities.
  ================================================ */

  {
    id: 29,
    name: "Ashburn Farmers Market",
    category: "Community Events",
    description:
      "A weekly outdoor farmers market in Ashburn featuring local produce, artisan goods, live music, and family activities. Vendors include farms from across Northern Virginia.",
    phone: null,
    address: "One Loudoun, 44925 Elm Tree Terrace, Ashburn, VA 20147",
    website: "https://www.oneloudoun.com/events",
    tags: ["farmers market", "produce", "local", "outdoor", "family", "artisan", "music", "weekly", "ashburn", "one loudoun"],
  },

  {
    id: 30,
    name: "Loudoun County Parks & Recreation – Free Events",
    category: "Community Events",
    description:
      "Loudoun County Parks & Recreation hosts dozens of free family events throughout the year including outdoor concerts, nature walks, holiday celebrations, and fitness programs at county parks.",
    phone: "(703) 777-0343",
    address: "Various parks throughout Loudoun County",
    website: "https://www.loudoun.gov/parks",
    tags: ["parks", "recreation", "free events", "concerts", "nature", "family", "fitness", "outdoor", "holiday", "community", "loudoun"],
  },

  {
    id: 31,
    name: "Ashburn Community Foundation – Volunteer Opportunities",
    category: "Community Events",
    description:
      "The Ashburn Community Foundation connects residents to volunteer programs, neighborhood clean-ups, charity drives, and civic engagement events throughout the Ashburn area.",
    phone: "(703) 542-3232",
    address: "Ashburn, VA 20147",
    website: "https://www.ashburnchamber.org",
    tags: ["volunteer", "community", "clean-up", "charity", "civic", "events", "ashburn", "foundation", "neighborhood", "engagement"],
  },

  {
    id: 32,
    name: "Loudoun Interfaith Relief – Community Programs",
    category: "Community Events",
    description:
      "Loudoun Interfaith Relief brings together faith communities to host donation drives, community dinners, backpack programs for students, and holiday assistance events throughout the year.",
    phone: "(703) 443-0605",
    address: "600 S King St, Leesburg, VA 20175",
    website: "https://www.loudouninterfaithrelief.org",
    tags: ["interfaith", "donation", "community dinner", "backpack", "holiday", "school supplies", "students", "leesburg", "faith", "events"],
  },

];


/* ================================================
   CATEGORY METADATA
   
   This object is used by main.js to:
   - Look up the icon for each category
   - Look up the CSS class for badge colors
   - Keep all category info in one place
================================================ */
export const CATEGORY_META = {
  "Food Assistance": {
    icon: "ri-restaurant-line",     /* RemixIcon class name */
    badgeClass: "badge--food",      /* matches CSS in style.css */
    iconClass: "icon--food",
  },
  "Health Services": {
    icon: "ri-heart-pulse-line",
    badgeClass: "badge--health",
    iconClass: "icon--health",
  },
  "Youth & Education": {
    icon: "ri-graduation-cap-line",
    badgeClass: "badge--youth",
    iconClass: "icon--youth",
  },
  "Housing & Shelter": {
    icon: "ri-home-4-line",
    badgeClass: "badge--housing",
    iconClass: "icon--housing",
  },
  "Support Services": {
    icon: "ri-hand-heart-line",
    badgeClass: "badge--support",
    iconClass: "icon--support",
  },
  "Community Events": {
    icon: "ri-calendar-event-line",
    badgeClass: "badge--events",
    iconClass: "icon--events",
  },
};
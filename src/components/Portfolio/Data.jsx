import Work1 from "../../assets/Work1.png";
import Work2 from "../../assets/Work2.png";
import Work3 from "../../assets/Work3.png";
import Work4 from "../../assets/Work4.png";
import Work5 from "../../assets/Work5.png";
import Work6 from "../../assets/Work6.png";
import Work7 from "../../assets/Work7.png";
import Work8 from "../../assets/Work8.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Marketing Dashboard",
    subtitle: "Traffic analysis on webpage and LinkedIn posts",
    category: "Data Analysis",
    description: "A comprehensive marketing dashboard created using Looker Studio to visualize key marketing metrics and insights.",
    date: "January 2024",
    technologies: ["Looker Studio", "Power My Analytics"],
    link: "https://shorturl.at/IuNts", // Link to project demo or repository

    businessProblem: "The company had launched numerous marketing initiatives aimed at acquiring new clients, but the impact of each initiative on overall client acquisition performance was unclear, making it challenging to optimize marketing efforts effectively.",
    objective: "Develop a comprehensive analytics solution that empowers upper management to gain deep insights into marketing behaviors, enabling the formulation of more effective, data-driven marketing strategies.",
    methodology: [
      "Conducted a thorough analysis of the marketing initiatives to define the project’s scope and objectives.",
      "Collaborated with the Marketing and Social Media teams to identify and collect the key data required for analysis.",
      "Connected and unified all relevant information using data connectors to ensure a seamless flow of data for analysis.",
      "Designed and developed an intuitive dashboard layout tailored to the needs of upper management.",
      "Engaged with key stakeholders and leadership to review the dashboard, incorporating their feedback to refine and optimize the final product."
    ],
    keyInsights: [
      "Analysis revealed that several web page articles were attracting significant traffic, but the majority of visitors were searching for unrelated information, leading to high bounce rates and lower conversion potential.",
      "Insights showed that certain user paths through the website led to higher conversion rates, suggesting that optimizing these paths could boost overall client acquisition performance.",
      "Data indicated that some marketing initiatives were not reaching the intended target audience, resulting in lower engagement and conversion rates. Adjusting audience targeting could significantly enhance campaign effectiveness."
    ],
    businessImpact: [
      {
        title: "50% Faster Decisions",
        description: "Speeding up strategic marketing choices"
      },
      {
        title: "20% ROI Boost",
        description: "Maximizing returns through data-driven focus"
      },
      {
        title: "Real-Time Edge",
        description: "Outpacing competitors with agile strategy shifts"
      }
    ],
    recommendations: [
      "Reallocate Budget to High-Performing Channels: Shift marketing spend towards channels identified as most effective in driving client acquisition, ensuring resources are optimized for maximum impact.",
    
      "Target Audience Optimization: Adjust targeting parameters to better align with high-engagement segments, improving the relevance of marketing campaigns and increasing overall conversion efficiency."
    ]
  },
  {
    id: 2,
    image: Work2,
    title: "Commercial Dashboard",
    subtitle: "Traffic analysis",
    category: "Data Analytics",
    description: "A commercial dashboard that helps analyze sales data.",
    date: "February 2024",
    technologies: ["Looker Studio", "Power My Analytics"],
    link: "https://shorturl.at/mRBs0",

    businessProblem: "The company struggled with an unclear sales pipeline and alumni distribution, making it challenging to track potential clients’ sales stages and optimize efforts to boost enrollment and drive growth.",
    objective: "To develop a comprehensive commercial dashboard that provides real-time visibility into the sales pipeline and alumni distribution, enabling the company to strategically manage the sales process, enhance targeting efforts, and drive increased enrollment in courses and master’s programs.",
    methodology: [
      "Conducted a thorough analysis of education offering of the company to define the project’s scope and objectives.",
      "Collaborated with the sales and upper management teams to identify and collect the key data required for analysis.",
      "Connected and unified all relevant information using data connectors to ensure a seamless flow of data for analysis.",
      "Designed and developed an intuitive dashboard layout tailored to the needs of upper management.",
      "Engaged with key stakeholders and leadership to review the dashboard, incorporating their feedback to refine and optimize the final product."
    ],
    keyInsights: [
      "Enhanced tracking provided clear visibility into the sales stages of potential new customers, enabling more proactive management and quicker decision-making.",
      "Seamless integration with the CRM ensured that the dashboard reflected up-to-date, accurate sales information, improving the reliability of data-driven decisions.",
      "Identified bottlenecks and high-interest segments allowed for focused efforts, leading to more effective sales strategies and better resource allocation."
    ],
    businessImpact: [
      {
        title: "30% Sales Conversion Increase",
        description: "Streamlined pipeline visibility will lead to more effective sales strategies and higher conversion rates."
      },
      {
        title: "50% Faster Sales Cycle",
        description: "Real-time tracking reduced the time needed to move leads through the sales stages"
      },
      {
        title: "20% Boost in Enrollment",
        description: "Enhanced targeting and process optimization will drive a significant increase in course and program enrollments."
      }
    ],
    recommendations: [
      "Use the improved visibility of sales stages to implement more targeted follow-ups and interventions, reducing lead stagnation and accelerating the sales cycle.",
      "Ensure continuous integration and updating of CRM data to maintain the accuracy of sales information, enabling more reliable and timely strategic decisions.",
      "Concentrate marketing and sales efforts on the customer segments identified as most likely to convert, optimizing resource allocation and driving sustained enrollment growth."
    ]
  },
  {
    id: 3,
    image: Work3,
    title: "Bidder",
    subtitle: "Blockchain Bidding Platform",
    category: "Others",
    description: "An AI-powered bidding platform designed to optimize the bidding process in real-time auctions.",
    date: "March 2024",
    technologies: ["JavaScript", "Blockchain", "Azure", "React"],
    link: "https://bidder.fm-house.com/login",

    businessProblem: "FMHOUSE’s manual tender process lacked the security, transparency, and efficiency needed to effectively manage bids for high-profile clients, risking client trust and competitive positioning.",
    objective: "To develop a secure, transparent, and efficient digital platform for managing tenders, aimed at enhancing FMHOUSEm’s ability to reliably serve high-profile clients, strengthen client trust, and maintain a competitive edge in the market.",
    methodology: [
      "Collaborated with stakeholders to define clear requirements, ensuring the platform would meet the specific needs of FMHOUSE and its high-profile clients.",
      "Created mockups and wireframes that aligned with the company’s branding and user experience goals, ensuring a user-friendly and professional interface.",
      "Chose a robust technological stack and cloud infrastructure to ensure scalability, security, and future-proofing of the platform",
      "Managed the development process, coordinating across multiple teams in different countries to keep the project on budget and on schedule",
      "Conducted thorough testing for quality and security, incorporating feedback to refine the platform and implement necessary updates, including blockchain integration for enhanced transparency."
    ],
    keyInsights: [
      "Digitalizing the tender process removed manual inefficiencies, significantly speeding up bid management and improving overall workflow.",
      "The integration of blockchain technology provided verifiable integrity, boosting client confidence and safeguarding sensitive information.",
      "The chosen tech stack and cloud deployment ensured the platform could easily scale with FMHOUSE’s growing needs, positioning the company for long-term success."
    ],
    businessImpact: [
      {
        title: "50% Faster Bid Processing",
        description: "Streamlined workflows halved the time required to manage and submit bids."
      },
      {
        title: "100% Transparency",
        description: "Blockchain integration ensured full traceability, enhancing client trust and compliance."
      },
      {
        title: "25% Cost Savings",
        description: "Efficient digital processes reduced operational costs, boosting profitability."
      }
    ],
    recommendations: [
      "Leverage blockchain technology across additional processes to further enhance security and transparency, strengthening client trust.",
      "Regularly update and refine the platform based on user feedback and emerging technologies to maintain a competitive edge and operational efficiency.",
      "Prepare for future growth by periodically reviewing and scaling the platform’s infrastructure to ensure it continues to meet the needs of expanding client portfolios and increasing tender volumes."
    ]
  },
  {
    id: 4,
    image: Work4,
    title: "Marketing Agency Strategic Analysis",
    subtitle: "Independent Strategic Consultancy",
    category: "Strategic Planning",
    description: "Grupo Lyown Strategic Planning",
    date: "March 2024",
    technologies: ["Consultancy Methodologies", "Canvas Business Model"],
    link: "https://shorturl.at/EzbK9",

    businessProblem: "Grupo Lyown faced increasing competition in the marketing and brand consultancy sector, struggling with fragmented strategies across its five business units. This lack of alignment hindered the company’s ability to achieve cohesive, measurable outcomes, threatening its market position and growth potential.",
    objective: "To develop and implement a unified strategic planning framework that aligns the goals and initiatives of Grupo Lyown’s diverse business units, driving cohesive action and establishing clear performance targets to enhance competitiveness and long-term growth.",
    methodology: [
      "Developed tailored strategic planning exercises to address the unique needs of each business unit, ensuring relevance and engagement.",
      "Conducted a series of group and individual workshops with senior management and area leaders to foster cross-unit alignment and collaborative ideation.",
      "Collected and analyzed data from workshops to identify key insights, challenges, and opportunities across the organization.",
      "Structured a clear set of initiatives and OKRs based on workshop outcomes, providing a strategic roadmap for each business unit.",
      "Conducted follow-up sessions to socialize and refine the strategic framework, ensuring ongoing alignment with the company’s long-term vision."
    ],
    keyInsights: [
      "The analysis revealed significant misalignment in objectives across business units, highlighting the need for a unified strategy to drive cohesive action.",
      "Identified potential synergies between business units that were previously underutilized, paving the way for more integrated and efficient operations.",
      "The workshops underscored the lack of consistent performance indicators, leading to the development of precise OKRs that provided clear, actionable targets for each unit"
    ],
    businessImpact: [
      {
        title: "20% Efficiency Boost",
        description: "Aligned objectives streamlined operations."
      },
      {
        title: "Clear Growth Trajectory",
        description: "OKRs focused efforts on strategic goals."
      },
      {
        title: "Stronger Market Position",
        description: "Unified strategy enhanced competitiveness."
      }
    ],
    recommendations: [
      "Regularly review and update the strategic framework to ensure ongoing alignment across all business units, driving sustained cohesion and effectiveness.",
      "Actively pursue collaborative opportunities between business units to maximize efficiency and innovation.",
      "Continuously track progress against OKRs and adjust as needed to keep the company on track towards its long-term objectives."
    ]
  },
  {
    id: 5,
    image: Work5,
    title: "Fuel Additive Company Consultancy",
    subtitle: "Blockchain Bidding Platform",
    category: "Strategic Planning",
    description: "An AI-powered bidding platform designed to optimize the bidding process in real-time auctions.",
    date: "March 2024",
    technologies: ["Consultancy Methodologies", "Canvas Business Model"],
    link: "https://shorturl.at/EzbK9",

    businessProblem: "RENDIMAX faced challenges in clearly defining its strategic direction amidst a competitive market. Without a cohesive strategy, the company risked losing its market position and missing opportunities for growth, making it essential to establish a clear roadmap for where to compete, how to win, and the capabilities needed to succeed.",
    objective: "To develop a comprehensive strategic plan for RENDIMAX that answers critical questions about market positioning, competitive advantage, and core capabilities, ultimately guiding the company’s growth and ensuring long-term success in a competitive industry.",
    methodology: [
      "Selected and structured ten strategic exercises tailored to RENDIMAX’s specific needs, ensuring relevance to the company’s goals.",
      "Led intensive group sessions with senior management, guiding them through analysis and ideation processes to uncover key strategic insights.",
      "Delved into both external market factors and internal operations, providing a comprehensive view of the company’s position and potential.",
      "Utilized tools like the Business Canvas, Balanced Scorecard, and Strategy Map to create a clear, actionable strategy.",
      "Established specific key performance indicators and essential initiatives to drive the execution of short, medium, and long-term goals."
    ],
    keyInsights: [
      "Identified weaknesses in RENDIMAX’s brand positioning that needed to be addressed to strengthen its competitive edge in the market.",
      "Recognized areas where the company’s existing capabilities could be enhanced or expanded to better support its growth ambitions.",
      "Found a lack of alignment between short-term actions and long-term goals, underscoring the need for a cohesive strategy that bridges this gap."
    ],
    businessImpact: [
      {
        title: "15% Market Share Increase",
        description: "Strengthened brand positioning is expected to led a significant gain in market presence."
      },
      {
        title: "2x Growth Potential",
        description: "Enhanced core capabilities will position RENDIMAX for accelerated expansion."
      },
      {
        title: "20% Efficiency Boost",
        description: "Improved strategic alignment streamlined operations and resource allocation."
      }
    ],
    recommendations: [
      "Invest in targeted marketing efforts to close gaps in market positioning and solidify RENDIMAX’s competitive edge.",
      "Focus on developing and expanding key capabilities to better support growth objectives and increase operational efficiency.",
      "Regularly review and adjust short-term initiatives to ensure they are aligned with the company’s long-term strategic vision, driving sustained success."
    ]
  },
  {
    id: 6,
    image: Work6,
    title: "Strategic Planning CRE Services Company",
    subtitle: "Yearly Strategic Planning Leadership",
    category: "Strategic Planning",
    description: "An AI-powered bidding platform designed to optimize the bidding process in real-time auctions.",
    date: "March 2024",
    technologies: ["Consultancy Methodologies", "Canvas Business Model"],
    link: "https://shorturl.at/EzbK9",

    businessProblem: "Accuro S.A.S. faced the challenge of staying ahead in a competitive real estate market, requiring a clear, strategic approach to innovation and product development. Without a structured plan, the company risked missing growth opportunities and falling behind in market leadership.",
    objective: "To conduct comprehensive annual strategic planning that defines innovation projects, allocates budgets, and develops a portfolio of initiatives aimed at driving Accuro S.A.S.’s growth, expanding market presence, and maintaining its leadership in the real estate services sector.",
    methodology: [
      "Developed and tailored strategic planning exercises to align with the specific goals and needs of each business unit, ensuring relevant and actionable outcomes.",
      "Led workshops that brought together senior management from all business units, fostering collaboration and ensuring alignment on strategic priorities.",
      "Integrated data-driven analysis of market trends and resource capabilities to inform decision-making and identify growth opportunities.",
      "Compiled and structured a portfolio of innovation initiatives, ensuring that projects were strategically aligned with the company’s long-term goals.",
      "Established a process for continuous monitoring and adjustment of the strategic plan, ensuring it remained relevant and effective in driving business transformation."
    ],
    keyInsights: [
      "Identified untapped market segments and growth opportunities, allowing the company to focus its efforts on high-potential areas for expansion.",
      "Revealed inefficiencies in resource allocation across business units, leading to more effective distribution of budgets and personnel to support strategic initiatives.",
      "Uncovered a need for better alignment between innovation projects and long-term business goals, prompting the development of a more focused and impactful innovation portfolio."
    ],
    businessImpact: [
      {
        title: "2x Innovation Success",
        description: "Better-aligned projects doubled the impact of innovation initiatives on business outcomes."
      },
      {
        title: "30% Cost Reduction",
        description: "Improved resource allocation led to substantial cost savings across business units."
      },
      {
        title: "50% Faster Time-to-Market",
        description: "Enhanced innovation processes accelerated product development and market entry."
      }
    ],
    recommendations: [
      "Focus on expanding into identified untapped market segments to drive sustained revenue growth and strengthen market position.",
      "Continuously assess and adjust resource distribution to ensure that budgets and personnel are aligned with strategic priorities, maximizing efficiency and impact.",
      "Regularly review and refine the innovation portfolio to ensure all projects are directly contributing to long-term business objectives, enhancing the overall effectiveness of innovation efforts."
    ]
  },
  {
    id: 7,
    image: Work7,
    title: "Digital Gap Analysis",
    subtitle: "Technology Assessment",
    category: "Others",
    description: "ESA",
    date: "March 2024",
    technologies: ["Consultancy Methodologies", "Azure"],
    link: "https://shorturl.at/EzbK9",

    businessProblem: "The European Space Agency (ESA) faced a significant technological gap between the tools used in the Facility Management (FM) department and the cutting-edge technologies available within the organization. This disparity hindered ESA’s ability to fully leverage its technological assets, threatening the alignment of its operations with its global strategic objectives.",
    objective: "To conduct a comprehensive strategic analysis of the technological gap within ESA's Facility Management department, providing crucial insights to develop a global digital strategy that ensures optimal alignment of technological investments with the agency's long-term objectives.",
    methodology: [
      "Developed a structured evaluation framework consisting of 600 questions across 10 research domains, ensuring thorough data collection tailored to the specific technological needs and gaps.",
      "Utilized a mix of qualitative and quantitative methods, including in-depth interviews, to gather detailed insights from key stakeholders and assess the technological landscape within the FM department.",
      "Implemented a systematic process for collecting and processing data, ensuring accuracy and reliability in the analysis, which was critical given the novelty of the endeavor for ESA.",
      "Conducted a rigorous analysis of the collected data to identify key technological gaps, aligning findings with ESA’s strategic objectives.",
      "Compiled a detailed report incorporating primary and secondary analyses, providing actionable insights and strategic recommendations for closing the digital gap and optimizing ESA’s technological investments."
    ],
    keyInsights: [
      "Identified major gaps between the FM department’s current tools and the advanced technologies available within ESA, highlighting areas needing immediate attention to enhance operational efficiency.",
      "Discovered that several cutting-edge technologies within ESA were underutilized in the FM department, presenting opportunities for better resource allocation and increased return on investment.",
      "Recognized the need for a unified digital strategy to align technological efforts across departments, ensuring that all technological investments support ESA’s overarching strategic goals."
    ],
    businessImpact: [
      {
        title: "Up to 40% Efficiency Boost",
        description: "Optimizing technology use can streamline operations and reduced resource waste."
      },
      {
        title: "50% Better ROI on Tech Investments",
        description: "Strategic alignment increased the value derived from existing technological assets."
      },
      {
        title: "Unified Digital Strategy",
        description: "Closing the tech gap enhanced ESA’s competitive edge in space exploration innovation."
      }
    ],
    recommendations: [
      "Prioritize the adoption of underutilized advanced technologies in the FM department to enhance operational efficiency and fully leverage ESA’s existing resources.",
      "Create a cohesive digital strategy that aligns technological initiatives across all departments, ensuring that all tech investments support ESA’s long-term strategic objectives.",
      "Implement ongoing evaluations to ensure that technology use continues to align with evolving strategic goals, driving sustained innovation and competitive advantage."
    ]
  },
  {
    id: 8,
    image: Work8,
    title: "Digital Readiness Analysis",
    subtitle: "Technology Assessment",
    category: "Others",
    description: "Hoteles Palladium",
    date: "March 2024",
    technologies: ["Consultancy Methodologies", "Azure"],
    link: "https://shorturl.at/EzbK9",

    businessProblem: "Rosmiman faced the challenge of ensuring that its customers, particularly Palladium Hotels Group, were adequately prepared for the implementation of its IWMS software. Without a thorough assessment, there was a significant risk of delays and inefficiencies, potentially undermining the successful adoption of the solution and misaligning with Rosmiman’s process optimization goals.",
    objective: "To develop a comprehensive readiness assessment that evaluates key operational aspects of Rosmiman’s customers, ensuring they are fully prepared for the successful implementation of the IWMS software, thereby minimizing risks and aligning with the company’s strategic goal of optimizing implementation processes.",
    methodology: [
      "Created a detailed framework for evaluating customer readiness, focusing on critical operational aspects that influence the success of IWMS implementation.",
      "Employed a mixed-method approach, combining quantitative data with qualitative insights gathered from stakeholder interviews to ensure a comprehensive understanding of readiness levels.",
      "Developed a heat map to visually represent areas of high risk, allowing for quick identification of critical issues that needed to be addressed before implementation.",
      "Analyzed and recalculated the likelihood of key implementation risks, providing a more accurate assessment of potential challenges.",
      "Compiled the findings into a detailed report, presenting it to the client and management team with actionable recommendations to address identified risks and ensure a smooth implementation."
    ],
    keyInsights: [
      "Identified significant gaps in operational readiness that could lead to delays or inefficiencies in the IWMS implementation, highlighting areas requiring immediate attention.",
      "The heat map revealed specific high-risk areas within the client’s operations, enabling targeted interventions to mitigate potential issues before the implementation process began.",
      "The recalculated risk probabilities provided a clearer understanding of the most pressing risks, allowing for more precise planning and resource allocation to ensure a smoother implementation."
    ],
    businessImpact: [
      {
        title: "80% Risk Reduction",
        description: "Targeted interventions minimized potential implementation failures."
      },
      {
        title: "2x Faster Implementation",
        description: "Addressing readiness gaps accelerated deployment timelines."
      },
      {
        title: "Zero Cost Overruns",
        description: "Proactive risk management ensured the project stayed within budget."
      }
    ],
    recommendations: [
      "Prioritize the resolution of identified operational gaps to ensure a smooth and efficient IWMS implementation, reducing the risk of delays.",
      "Allocate resources to mitigate risks in the high-priority areas identified by the heat map, ensuring these critical issues are resolved before deployment begins.",
      "Implement continuous monitoring and reassessment of risks throughout the implementation process to adapt strategies as needed, ensuring long-term project success."
    ]
  }

];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Data Analysis",
  },
  {
    name: "AI & Data Science",
  },  
  {
    name: "Strategic Planning",
  },
  {
    name: "Others",
  },
];
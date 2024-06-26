const allTransactionsBtn = document.getElementById("all-transactions");
const contributionsBtn = document.getElementById("contributions");
const disbursementsBtn = document.getElementById("disbursements");
const expensesBtn = document.getElementById("expenses");
const currencySelect = document.getElementById("currency");
const reportResults = document.getElementById("report-results");
const content = document.getElementById("batch1");

let usdToINR = 80; 
let previouslyClickedButton;

const convertToUSD = async () => {
  try {
    const apiKey = "b6e6ae8dc07f9d2a1934"; // Assuming you have an API key
    const url = `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const json = await response.json();
    usdToINR = json.USD_INR;
  } catch (error) {
    console.error("Error fetching conversion rate:", error.message);
  }
};
convertToUSD();

const transactionsData = [
  {
    name: "Subham Kumar",
    rollno: 1904090,
    branch: "Chemical",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Rohan Anand",
    rollno: 1905075,
    branch: "Civil",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Jayesh Kumar",
    rollno: 1909018,
    branch: "Computer Science",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Kumar Shashwat",
    rollno: 1906023,
    branch: "Electronics and Communication",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Suraj Kumar",
    rollno: 1901098,
    branch: "Electrical",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Ankit Kumar",
    rollno: 1911009,
    branch: "Information Technology",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Shubham Kumar Gupta",
    rollno: 1900116,
    branch: "Mechanical",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Amit Kumar Sharma",
    rollno: 1903006,
    branch: "Metallurgy",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Vishal Kumar Pathak",
    rollno: 1906023,
    branch: "Mining",
    syr: "Ineligible",
    tyr: 20000,
    fyr: "Ineligible",
  },
  {
    name: "Raghunandan Singh",
    rollno: "2002004D",
    branch: "Production",
    syr: 20000,
    tyr: 20000,
    fyr: 20000,
  },
  {
    name: "Mohammad Mehran",
    rollno: 1908050,
    branch: "Electrical",
    syr: 20000,
    tyr: "Ineligible",
    fyr: "Ineligible",
  },
  {
    name: "Deepak Kumar Koda",
    rollno: 1801034,
    branch: "Electrical",
    syr: "Ineligible",
    tyr: 20000,
    fyr: "N/A",
  },

  {
    name: "Ashutosh Kumar Pandey",
    rollno: 2004023,
    branch: "Chemical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Ankur Kumar",
    rollno: 2005027,
    branch: "Civil",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Ayush Anshu",
    rollno: 2009001,
    branch: "Computer Science",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Harsh Kumar",
    rollno: 2001114,
    branch: "Electrical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Aman Kumar",
    rollno: 2006009,
    branch: "Electronics and Communication",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Navneet Sinha",
    rollno: "211007D",
    branch: "Information Technology",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Shubham Barnawal",
    rollno: 2000126,
    branch: "Mechanical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Akash Kumar",
    rollno: "2103001D",
    branch: "Metallurgy",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Raj Kumar",
    rollno: 2008039,
    branch: "Mining",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Shashikant",
    rollno: "2102017D",
    branch: "Production",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },

  {
    name: "Rajshree",
    rollno: 21030430065,
    branch: "Civil",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Abhishek Kumar",
    rollno: 21030455001,
    branch: "Electrical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Aman Kumar",
    rollno: 21030455003,
    branch: "Electrical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Rena Kumari",
    rollno: 21030495012,
    branch: "Mechanical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Ritika Kumari Singh",
    rollno: 21030425008,
    branch: "Chemical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Ashish Kumar Mishra",
    rollno: "221030420028",
    branch: "Chemical",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Aayushi Singh",
    rollno: 21030465001,
    branch: "Electronics",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Kheya Rani Das",
    rollno: "21030460026",
    branch: "Electronics",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Parvati Kumari",
    rollno: 21030505003,
    branch: "Metallurgy",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
  {
    name: "Swapnil Pandit",
    rollno: "21030505003",
    branch: "Information Technology",
    syr: "N/A",
    tyr: 20000,
    fyr: "TBD",
  },
];
const contributorData = [
  {
    sectionName: "Founding Members",
    members: [
      {
        date: "XX/XX/XXXX",
        name: "ANANT BHATT",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "AJIT KUMAR",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "ANIL KUMAR",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "MADHURESH NAGSHAIN",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "MURARI PRASAD",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "PANDEY BRIJ BHUSHAN PRASAD",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RAJIV TEWARY",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RAJAT KANTI ROY",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RAJEEVA RANJAN",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RANJIT VARMA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "SUJIT KUMAR MITRA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "VIJAY KUMAR PRADHAN",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
    ],
  },
  {
    sectionName: "Additional Members",
    members: [
      {
        date: "XX/XX/XXXX",
        name: "ABHAY K.VERMA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "BAIJU PRASAD GUPTA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "BIPIN BIHARI VERMA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "BINOD KUMAR JHA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "DEBMALYA GHOSH",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "INDRADEO NARAYAN SINHA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "MANOHAR SINGH SAINI",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "MUKTESHWAR CH.",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "MUKUND CHANDRA BHATTA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "NARENDRA NARAYAN MISHRA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "NIRMAL KUMAR",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "PRAKASH BIHARI DAS",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "PRABHAT JHA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "PRADIP KUMAR",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RADHE SHYAM MISHRA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RAM BILAS SINGH",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RAK KRIPAL SINGH",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "RANG NATH JHA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "SHAMBHU DAS",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "SHYAM NANDAN MISHRA",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "SHYAM SUNDER YADAV",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "UMASHANKAR YADAV",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
      {
        date: "XX/XX/XXXX",
        name: "YOGENDRA TIWARY",
        contributedAmount: 0,
        debitAmount: 0,
        totalAmount: 0,
      },
    ],
  },
];

const batch1Size = 12; // Number of elements in the 1st table (Jubilee Batch Scholarship 2019-2023)
const batch2Size = 10; // Number of elements in the 2nd table (Jubilee Batch Scholarship 2020-2024)

function handleButtonClick(e) {
  let clickedButton = e.target.id;
  if(clickedButton == "currency")
  {
    clickedButton = previouslyClickedButton;
  }
  else
  {
    previouslyClickedButton = e.target.id;
  }
  const selectedCurrency = currencySelect.value;
  let reportData; 
  switch (clickedButton) {
    case "all-transactions":
      showAllTransactions(selectedCurrency, usdToINR);
      break;
    case "contributions":
      showContributions(selectedCurrency, usdToINR)
      break;
    case "disbursements":
      showNoDataFound();
      break;
    case "expenses":
      showNoDataFound();
      break;
    default:
      console.warn("Error");
  }
}

function showAllTransactions(selectedCurrency , usdToINR) {
  content.innerHTML = "";
  function createTable(data, headingText) {
    // Create the heading element
    const heading = document.createElement("h2");
    heading.textContent = headingText;

    // Create a table element
    const table = document.createElement("table");
    table.classList.add("table");
    const tableHead = document.createElement("thead");
    const tableRow = document.createElement("tr");

    // Create table headers
    const headers = [
      "S.No",
      "Name of Student",
      "Roll No.",
      "Branch",
      "2nd Year",
      "3rd Year",
      "4th Year",
    ];
    for (const header of headers) {
      const tableHeaderCell = document.createElement("th");
      tableHeaderCell.textContent = header;
      tableRow.appendChild(tableHeaderCell);
    }

    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    // Create table body
    const tableBody = document.createElement("tbody");

    // Loop through transactions data and add rows
    for (let i = 0; i < data.length; i++) {
      const student = data[i];
      const tableBodyRow = document.createElement("tr");

      const tableDataCells = [
        i + 1, // S.No (starting from 1)
        student.name,
        student.rollno,
        student.branch,
        formatCurrency(student.syr),
        formatCurrency(student.tyr),
        formatCurrency(student.fyr),
      ];

      for (const data of tableDataCells) {
        const tableBodyCell = document.createElement("td");
        tableBodyCell.textContent = data;
        tableBodyRow.appendChild(tableBodyCell);
      }

      tableBody.appendChild(tableBodyRow);
    }

    table.appendChild(tableBody);

    return { heading, table };
  }

  function formatCurrency(amount) {
    if (
      selectedCurrency === "usd" &&
      amount !== "TBD" &&
      amount !== "N/A" &&
      amount != "Ineligible"
    ) {
      return `$ ${(amount /usdToINR ).toLocaleString()}`; // Format to USD with commas
    } else if (
      selectedCurrency === "inr" &&
      amount !== "TBD" &&
      amount !== "N/A" &&
      amount != "Ineligible"
    ) {
      return `₹ ${amount}`; // Display Rupee symbol
    } else {
      return amount; // Default (no formatting)
    }
  }

  // Create tables for each batch based on data index
  const batch1Data = transactionsData.slice(0, batch1Size);
  const batch1Table = createTable(
    batch1Data,
    "Jubilee Batch Scholarship (2019-2023)"
  );

  const batch2Data = transactionsData.slice(
    batch1Size,
    batch1Size + batch2Size
  );
  const batch2Table = createTable(
    batch2Data,
    "Jubilee Batch Scholarship (2020-2024)"
  );

  const remainingData = transactionsData.slice(batch1Size + batch2Size);
  const remainingTable = createTable(
    remainingData,
    "Jubilee Batch Scholarship (2021-2025)"
  );

  // Append headings and tables to the content element
  content.appendChild(batch1Table.heading);
  content.appendChild(batch1Table.table);

  content.appendChild(batch2Table.heading);
  content.appendChild(batch2Table.table);

  content.appendChild(remainingTable.heading);
  content.appendChild(remainingTable.table);
}

//  Contribution Button
function showContributions(selectedCurrency, usdToINR) {
  content.innerHTML = "";

  function createTable(data, headingText) {
    // Create the heading element
    const heading = document.createElement("h2");
    heading.textContent = headingText;

    // Create a table element
    const table = document.createElement("table");
    table.classList.add("table");
    const tableHead = document.createElement("thead");
    const tableRow = document.createElement("tr");

    // Create table headers with S.No
    const headers = [
      "S.No",
      "Date",
      "Name",
      "Contributed Amount",
      "Debit Amount",
      "Total Amount",
    ];
    for (const header of headers) {
      const tableHeaderCell = document.createElement("th");
      tableHeaderCell.textContent = header;
      tableRow.appendChild(tableHeaderCell);
    }

    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    // Create table body
    const tableBody = document.createElement("tbody");

    function formatCurrency(amount) {
      if (
        selectedCurrency === "usd" &&
        amount !== "TBD" &&
        amount !== "N/A" &&
        amount != "Ineligible"
      ) {
        return `$ ${(amount /usdToINR ).toLocaleString()}`; // Format to USD with commas
      } else if (
        selectedCurrency === "inr" &&
        amount !== "TBD" &&
        amount !== "N/A" &&
        amount != "Ineligible"
      ) {
        return `₹ ${amount}`; // Display Rupee symbol
      } else {
        return amount; // Default (no formatting)
      }
    }

    // Loop through contributor data and add rows with S.No
    let count = 1;
    for (const member of data) {
      const tableBodyRow = document.createElement("tr");

      const tableDataCells = [
        count, // S.No (starting from 1)
        member.date,
        member.name,
        // formatCurrency(member.contributedAmount),
        // formatCurrency(member.debitAmount),
        // formatCurrency(member.totalAmount),
        "",
        "",
        "",
      ];

      count++; // Increment S.No for each row

      for (const data of tableDataCells) {
        const tableBodyCell = document.createElement("td");
        tableBodyCell.textContent = data;
        tableBodyRow.appendChild(tableBodyCell);
      }

      tableBody.appendChild(tableBodyRow);
    }

    table.appendChild(tableBody);

    return { heading, table };
  }

  // Create tables for Founding Members and Additional Members
  const foundingMembersTable = createTable(
    contributorData[0].members,
    contributorData[0].sectionName
  );
  const additionalMembersTable = createTable(
    contributorData[1].members,
    contributorData[1].sectionName
  );

  // Append headings and tables to the content element
  content.appendChild(foundingMembersTable.heading);
  content.appendChild(foundingMembersTable.table);

  content.appendChild(additionalMembersTable.heading);
  content.appendChild(additionalMembersTable.table);
}
function showNoDataFound() {
  content.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "No Data Found";
  content.appendChild(heading);
}

allTransactionsBtn.addEventListener("click", handleButtonClick);
contributionsBtn.addEventListener("click", handleButtonClick);
disbursementsBtn.addEventListener("click", handleButtonClick);
expensesBtn.addEventListener("click", handleButtonClick);
currencySelect.addEventListener("change", handleButtonClick);

const allTransactionsBtn = document.getElementById("all-transactions");
const contributionsBtn = document.getElementById("contributions");
const disbursementsBtn = document.getElementById("disbursements");
const expensesBtn = document.getElementById("expenses");
const currencySelect = document.getElementById("currency");
const reportResults = document.getElementById("report-results");
const content = document.getElementById("batch1");

// Sample data (replace with actual data fetching logic)
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
        syr: "20000", 
        tyr: 20000,
        fyr: "20000",
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
        syr: "Ineleigible",
        tyr: "20000",
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

  

function showAllTransactions() {
  content.innerHTML = "";

  // Create a table element
  const table = document.createElement("table");
  table.classList.add("table");
  const tableHead = document.createElement("thead");
  const tableRow = document.createElement("tr");

  // Create table headers
  const headers = ["S.No", "Name of Student", "Roll No.", "Branch", "2nd Year", "3rd Year", "4th Year"];
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
  for (let i = 0; i < transactionsData.length; i++) {
    const student = transactionsData[i];
    const tableBodyRow = document.createElement("tr");

    const tableDataCells = [
      i + 1, // S.No (starting from 1)
      student.name,
      student.rollno,
      student.branch,
      student.syr,
      student.tyr,
      student.fyr,
    ];

    for (const data of tableDataCells) {
      const tableBodyCell = document.createElement("td");
      tableBodyCell.textContent = data;
      tableBodyRow.appendChild(tableBodyCell);
    }

    tableBody.appendChild(tableBodyRow);
  }

  table.appendChild(tableBody);

  // Append the table to the content element
  content.appendChild(table);
}

allTransactionsBtn.addEventListener("click", showAllTransactions);
import ExplorerData from "../types/types";

const explorer: ExplorerData = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "Projects",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Website Development",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "MyPortfolio",
              isFolder: true,
              items: [
                {
                  id: "5",
                  name: "index.html",
                  isFolder: false,
                  items: [],
                },
                {
                  id: "6",
                  name: "about.html",
                  isFolder: false,
                  items: [],
                },
                {
                  id: "7",
                  name: "contact.html",
                  isFolder: false,
                  items: [],
                },
                {
                  id: "8",
                  name: "assets",
                  isFolder: true,
                  items: [
                    {
                      id: "9",
                      name: "logo.png",
                      isFolder: false,
                      items: [],
                    },
                    {
                      id: "10",
                      name: "styles.css",
                      isFolder: false,
                      items: [],
                    },
                    {
                      id: "11",
                      name: "images",
                      isFolder: true,
                      items: [
                        {
                          id: "12",
                          name: "profile.jpg",
                          isFolder: false,
                          items: [],
                        },
                        {
                          id: "13",
                          name: "project1.png",
                          isFolder: false,
                          items: [],
                        },
                        {
                          id: "14",
                          name: "project2.png",
                          isFolder: false,
                          items: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "15",
              name: "CompanyWebsite",
              isFolder: true,
              items: [
                // Nested items with similar structure as MyPortfolio
              ],
            },
          ],
        },
        {
          id: "16",
          name: "Mobile App Development",
          isFolder: true,
          items: [
            // Nested items with similar structure as Website Development
          ],
        },
      ],
    },
    {
      id: "17",
      name: "Design Resources",
      isFolder: true,
      items: [
        {
          id: "18",
          name: "Fonts",
          isFolder: true,
          items: [
            {
              id: "19",
              name: "Roboto.ttf",
              isFolder: false,
              items: [],
            },
            {
              id: "20",
              name: "OpenSans.ttf",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "21",
          name: "Color Palettes",
          isFolder: true,
          items: [
            {
              id: "22",
              name: "coolors.png",
              isFolder: false,
              items: [],
            },
            {
              id: "23",
              name: "adobe-swatches.ase",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "24",
          name: "Design Tools",
          isFolder: true,
          items: [
            {
              id: "25",
              name: "Figma",
              isFolder: false,
              items: [],
            },
            {
              id: "26",
              name: "Adobe XD",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: "27",
      name: "Documents",
      isFolder: true,
      items: [
        {
          id: "28",
          name: "Personal",
          isFolder: true,
          items: [
            {
              id: "29",
              name: "Resume.pdf",
              isFolder: false,
              items: [],
            },
            {
              id: "30",
              name: "CoverLetter.pdf",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "31",
          name: "Work",
          isFolder: true,
          items: [
            {
              id: "32",
              name: "ProjectProposal.pdf",
              isFolder: false,
              items: [],
            },
            {
              id: "33",
              name: "ProjectReport.pdf",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id : "34",
      name :"Packages.json",
      isFolder : false,
      items : []
    },{
      id : "35",
      name :"package-lock.json",
      isFolder : false,
      items : []
    },{
      id : "36",
      name :"tsconfig.json",
      isFolder : false,
      items : []
    },{
      id : "37",
      name :"README.md",
      isFolder : false,
      items : []
    },{
      id : "38",
      name :"node_modules",
      isFolder : true,
      items : []
    },{
      id : "39",
      name :"src",
      isFolder : true,
      items : []
    },{
      id : "40",
      name :"public",
      isFolder : true,
      items : []
    },{
      id : "41",
      name :"package.json",
      isFolder : false,
      items : []
    },{
      id : "42",
      name :"App.tsx",
      isFolder : false,
      items : []
    },{
      id : "43",
      name :"index.tsx",
      isFolder : false,
      items : []
    },{
      id : "44",
      name :"index.css",
      isFolder : false,
      items : []
    },{
      id : "45",
      name :"App.css",
      isFolder : false,
      items : []
    },{
      id : "46",
      name :"reportWebVitals.ts",
      isFolder : false,
      items : []
    },{
      id : "47",
      name :"setupTests.ts",
      isFolder : false,
      items : []
    },{
      id : "48",
      name :"logo.svg",
      isFolder : false,
      items : []
    },{
      id : "49",
      name :"serviceWorker.ts",
      isFolder : false,
      items : []
    },{
      id : "50",
      name :"react-app-env.d.ts",
      isFolder : false,
      items : []
    },{
      id : "51",
      name :"index.html",
      isFolder : false,
      items : []
    },{
      id : "52",
      name :"favicon.ico",
      isFolder : false,
      items : []
    },{
      id : "53",
      name :"manifest.json",
      isFolder : false,
      items : []
    },{
      id : "54",
      name :"robots.txt",
      isFolder : false,
      items : []
    },{
      id : "55",
      name :"logo192.png",
      isFolder : false,
      items : []
    }
  ],
};

export const sortItemsAlphabetically = (items : ExplorerData[]) :ExplorerData[] => {
  return items.sort((a, b) => {
    // Folders come first, then alphabetical order
    if (a.isFolder && !b.isFolder) {
      return -1;
    } else if (!a.isFolder && b.isFolder) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  }).map(item => ({
    ...item,
    items: sortItemsAlphabetically(item.items),
  }));
};

// Sort the top-level items alphabetically



export default explorer;



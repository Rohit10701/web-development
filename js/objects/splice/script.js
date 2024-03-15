const explorer = [
    {
      "name": "Main Folder",
      "isFolder": true,
      "children": [
        {
          "name": "File 1",
          "isFolder": false
        },
        {
          "name": "Folder 1",
          "isFolder": true,
          "children": [
            {
              "name": "File 2",
              "isFolder": false
            },
            {
              "name": "File 3",
              "isFolder": false
            }
          ]
        },
        {
          "name": "File 4",
          "isFolder": false
        }
      ]
    },
  ];
const index = 10
const newExplorer = [
    ...explorer.splice(0, index),
    {
        "name" : "newFile",
        "isFolder" : false,
    },
    ...explorer.splice(index)
]
console.log(newExplorer)
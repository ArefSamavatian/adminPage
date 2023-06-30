import MainCategoryForm from "../component/main-category/MainCategoryFrom"

import myan from "./component/an";


function mainCategory() {
    const data = [
        {
            id: 1,
            name: "Parent 1",
            children: [
                {
                    id: 2,
                    name: "Child 1",
                    children: [
                        {
                            id: 7,
                            name: "Grandchild 1",
                        },
                        {
                            id: 8,
                            name: "Grandchild 2",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Child 2",
                    children: [
                        {
                            id: 9,
                            name: "Grandchild 3",
                        },
                        {
                            id: 10,
                            name: "Grandchild 4",
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            name: "Parent 2",
            children: [
                {
                    id: 5,
                    name: "Child 3",
                    children: [
                        {
                            id: 11,
                            name: "Grandchild 5",
                        },
                        {
                            id: 12,
                            name: "Grandchild 6",
                        },
                    ],
                },
                {
                    id: 6,
                    name: "Child 4",
                    children: [
                        {
                            id: 13,
                            name: "Grandchild 7",
                        },
                        {
                            id: 14,
                            name: "Grandchild 8",
                        },
                    ],
                },
            ],
        },
    ];
    return (
   <div>
    <h1>saddada</h1>
    <myan></myan>
   </div>
    )
}
export default mainCategory
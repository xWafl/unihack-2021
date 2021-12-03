import "./TreePage.css"
import logo from "../../assets/logo.png";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import knowledge from "../../assets/knowledge.png";
import { useState } from "react";

interface ITree {
    name: string;
    image: string;
    nodes: ITreeNode[];
}

interface ITreeNode {
    name: string;
    topics: string[]
    children: ITreeNode[];
}

function TreeNode({ name, topics, children, first }: ITreeNode & { first?: boolean }) {
    const [opened, setOpened] = useState(false);

    const levels: ITreeNode[][] = [];
    let currentLevel = children;
    let nextLevel = [];

    while (currentLevel.length !== 0) {
        levels.push([]);
        for (const node of currentLevel) {
            nextLevel.push(...node.children);
        }
        levels[levels.length - 1] = [...currentLevel];
        currentLevel = [...nextLevel];
        nextLevel = [];
    }

    console.log(levels);

    const widthNeeded = (node: ITreeNode): number => {
        if (node.children.length >= 2) {
            return node.children.reduce((acc, cur) => acc + widthNeeded(cur), 0)
        } else {
            return 300;
        }
    };

    console.log(widthNeeded({ name, topics, children }));

    return <div className="treeNodeArea" style={{ width: widthNeeded({ name, topics, children }) }}>
        { first && <div className="treeNodeTopRow">
            <div className="treeNodeTopRowBox"></div>
            <div className="treeNodeTopRowBox"></div>
        </div> }
        <div className="treeNode" style={{ height: opened ? topics.length === 0 ? 30 : topics.slice(0, 4).length * 40 + 30 : 30}}>
            <h3 className="treeNodeText">{ name }</h3>
            <div onClick={() => setOpened(!opened)}>
                <Icon
                    path={mdiChevronDown}
                    size={1}
                    color="#929292"
                    className="treeNodeIcon"
                />
            </div>
            {
                opened && topics.slice(0, 3).map(topic => (
                    <div key={`treeNodeTopic${topic}`} className="treeNodeTopic">{topic}</div>
                ))
            }
            {
                opened && topics.length > 3 && <div className="treeNodeTopic" style={{ color: "#4565EF" }}>See all...</div>
            }
        </div>
        { children.length !== 0 && <div className="treeNodeBottomRow">
            <div className="treeNodeBottomRowBox"></div>
            <div className="treeNodeBottomRowBox"></div>
        </div>}
        <TreeLevel firstLevel={false} contents={children} />
    </div>
}

function TreeLevel({ contents, firstLevel }: { contents: ITreeNode[], firstLevel: boolean }) {
    return <div className="treeLevel">
        {
            contents.map(j => (
                <div className="treeNodeContainer">
                    <TreeNode {...j} first={!firstLevel} />
                </div>
            ))
        }
    </div>;
}

export default function TreePage() {
    const tree: ITree = {
        name: "Mathematics",
        image: knowledge,
        nodes: [
            {
                name: "Pre-Algebra",
                topics: [],
                children: [
                    {
                        name: "Geometry",
                        children: [],
                        topics: [
                            "Triangles",
                            "Circles",
                            "Quadrilaterals",
                            "Ellipses",
                            "Cones"
                        ],
                    },
                    {
                        name: "Algebra",
                        children: [
                            {
                                name: "Algebra II",
                                children: [],
                                topics: ["Cubic functions"]
                            },
                            {
                                name: "Trigonometry",
                                children: [],
                                topics: []
                            }
                        ],
                        topics: ["Factoring", "Ratios", "Patterns"]
                    },
                    {
                        name: "Number theory",
                        children: [],
                        topics: []
                    },
                    {
                        name: "Counting",
                        children: [],
                        topics: []
                    }
                ]
            }
        ]
    }
    
    const levels: ITreeNode[][] = [];
    let currentLevel = tree.nodes;
    let nextLevel = [];

    while (currentLevel.length !== 0) {
        levels.push([]);
        for (const node of currentLevel) {
            nextLevel.push(...node.children);
        }
        levels[levels.length - 1] = [...currentLevel];
        currentLevel = [...nextLevel];
        nextLevel = [];
    }

    console.log(levels);

    return <div className="treePage">
        <div className="landingPageLogo">
            <img src={logo} alt="Logo" />
            <div className="treeHeader">
                <img src={tree.image} alt="TreeImage" />
                <h3>{tree.name}</h3>
            </div>
            <TreeLevel firstLevel={true} contents={levels[0]} />
        </div>
    </div>
}
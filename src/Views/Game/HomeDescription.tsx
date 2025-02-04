import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HomeDescription.module.scss";

export default function HomeDescription() {
  const navigate = useNavigate();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(0);
  const [selectedMap, setSelectedMap] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const algorithms = [
    { name: "深度优先搜索", description: "使用深度优先搜索策略生成迷宫..." },
    { name: "广度优先搜索", description: "使用广度优先搜索策略生成迷宫..." },
    { name: "Prim算法", description: "使用Prim最小生成树算法生成迷宫..." },
    {
      name: "Kruskal算法",
      description: "使用Kruskal最小生成树算法生成迷宫...",
    },
    { name: "递归分割", description: "使用递归分割方法生成迷宫..." },
    { name: "随机Prim", description: "使用随机化的Prim算法生成迷宫..." },
    { name: "Wilson算法", description: "使用Wilson的循环擦除算法生成迷宫..." },
    { name: "递归回溯", description: "使用递归回溯方法生成迷宫..." },
    {
      name: "Aldous-Broder",
      description: "使用Aldous-Broder随机游走算法生成迷宫...",
    },
  ];

  const maps = [
    { name: "经典迷宫", description: "传统的方形迷宫，充满挑战..." },
    { name: "六边形迷宫", description: "独特的六边形布局，带来全新体验..." },
    {
      name: "三角形迷宫",
      description: "三角形网格构成的迷宫，考验空间思维...",
    },
  ];

  const characters = [
    { name: "探险家艾米", description: "勇敢的探险家，擅长解决迷宫难题..." },
    { name: "魔法师露娜", description: "神秘的魔法师，可以使用特殊能力..." },
    { name: "机器人R2", description: "高科技机器人，配备先进导航系统..." },
  ];

  const startGame = () => {
    navigate("/gameDescription");
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <h1 className={classes.sectionTitle}>算法介绍</h1>
        <div className={classes.algorithmButtons}>
          {algorithms.map((algo, index) => (
            <button
              key={index}
              className={selectedAlgorithm === index ? classes.active : ""}
              onClick={() => setSelectedAlgorithm(index)}
            >
              {algo.name}
            </button>
          ))}
        </div>
        <div className={classes.algorithmDescription}>
          {algorithms[selectedAlgorithm].description}
        </div>
      </div>

      <div className={classes.rightSection}>
        <h1 className={classes.sectionTitle}>游戏介绍</h1>
        <div className={classes.mapSection}>
          <div className={classes.thumbnails}>
            {maps.map((map, index) => (
              <div
                key={index}
                className={`${classes.thumbnail} ${
                  classes[`gradient${index + 1}`]
                } ${selectedMap === index ? classes.selected : ""}`}
                onClick={() => setSelectedMap(index)}
              />
            ))}
          </div>
          <div className={classes.description}>
            {maps[selectedMap].description}
          </div>
        </div>

        <div className={classes.characterSection}>
          <div className={classes.characters}>
            {characters.map((char, index) => (
              <div
                key={index}
                className={`${classes.character} ${
                  classes[`characterGradient${index + 1}`]
                } ${selectedCharacter === index ? classes.selected : ""}`}
                onClick={() => setSelectedCharacter(index)}
              />
            ))}
          </div>
          <div className={classes.description}>
            {characters[selectedCharacter].description}
          </div>
        </div>

        <div className={classes.startSection}>
          <button onClick={backToHome} className={classes.backButton}>
            返回主页
          </button>
          <button onClick={startGame} className={classes.startButton}>
            开始游戏
          </button>
        </div>
      </div>
    </div>
  );
}

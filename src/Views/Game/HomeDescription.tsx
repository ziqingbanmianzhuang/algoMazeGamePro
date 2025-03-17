import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HomeDescription.module.scss";

import Player1 from "../Player/1Player";
import Player2 from "../Player/2Player";
import Player3 from "../Player/3Player";

import Scene1 from "../Scene/1Scene";
import Scene2 from "../Scene/2Scene";
import Scene3 from "../Scene/3Scene";

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
    {
      name: "沙漠迷宫",
      description:
        "沙漠迷宫以温暖的棕黄色调为主题，展现了一个充满挑战的沙漠环境。小型仙人掌和绿洲作为装饰增添了沙漠氛围。",
      com: <Scene1 />,
    },
    {
      name: "森林迷宫",
      description:
        "森林迷宫以其生机勃勃的绿色调为特色，象征自然与生命的活力。深绿色的墙壁代表茂密的树林，而明亮的绿色路径则是森林中蜿蜒的小径。",
      com: <Scene2 />,
    },
    {
      name: "冰雪迷宫",
      description:
        "冰雪迷宫以清新的蓝白色调为主题，呈现出一个寒冷而晶莹的冰雪世界。淡蓝色的迷宫基础与深蓝色的冰墙形成鲜明对比，纯白色的雪地路径清晰可见。",
      com: <Scene3 />,
    },
  ];

  const characters = [
    {
      name: "探险家奈雅",
      description:
        "奈雅是一位充满好奇心的算法探险家，她有着标志性的蓝色头发和时尚的耳机。作为一名计算机科学天才，能够凭借惊人的直觉在迷宫的每一个可能路径中寻找最佳解决方案。",
      com: <Player1 />,
    },
    {
      name: "守护骑士阿凌",
      description:
        "阿凌是迷宫世界中的守护骑士，橙色的短发下是一双洞察一切的眼睛，总是能以最高效的方式到达目标。‘作为骑士，我不会遗漏任何一个拐角。’",
      com: <Player2 />,
    },
    {
      name: "魔法师迪尔",
      description:
        "迪尔是一位年长的魔法师，他的标志是蓝色尖顶帽和标志性的细框眼镜。他的长胡子中蕴含着多年的算法智慧。‘不是所有路径都是平等的，智者会选择总体阻力最小的道路。’",
      com: <Player3 />,
    },
  ];

  const startGame = () => {
    navigate("/startGame");
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
              >
                {map.com}
              </div>
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
              >
                {char.com}
              </div>
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

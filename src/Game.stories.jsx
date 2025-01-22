import  Game  from './Game';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Game',
  component: Game,
  parameters: {
    layout: 'centered',
  },
};

// 基本的なストーリー
export const Default = {
  render: () => <Game />,
};

// 勝利シナリオのテストを追加
export const WinningScenario = {
  render: () => <Game />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // 遅延用の関数
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    // すべてのマス目を取得
    const squares = canvas.getAllByRole('button');
    
    // X が勝利するパターン（上段横一列）を再現
    // X → 0 → X → 0 → X の順番で選択
    await userEvent.click(squares[0]); // X を配置 (左上)
    await delay(200);
    await userEvent.click(squares[3]); // O を配置
    await delay(200);
    await userEvent.click(squares[1]); // X を配置 (上段中央)
    await delay(200);
    await userEvent.click(squares[4]); // O を配置
    await delay(200);
    await userEvent.click(squares[2]); // X を配置 (右上)

    // 勝利メッセージが表示されることを確認
    const winningMessage = await canvas.findByText('Winner: X');
    await expect(winningMessage).toBeInTheDocument();
  },
};


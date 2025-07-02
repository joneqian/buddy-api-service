const sendMessagesToOpenAi = async () => {
  const rawRes = await fetch(`http://127.0.0.1:8001/api/agent/stream-chat`, {
    method: 'POST',
    body: JSON.stringify({
      project_code: 'proj_96b518e26420419bb9356540ee5565ac',
      agent_code: 'agent_4e761aaf978e46c79edb306ca3b485a8',
      inputs: {
        customer_name: '陈建荣',
      },
      query: '他能吃鸡肉吗？',
      conversation_id: '',
      user_code: 'abc-123',
      files: [],
    }),
    headers: {
      'Content-Type': 'application/json',
      'x-from-source': 'swagger',
    },
  });

  const data = rawRes.body;
  if (!data) {
    throw new Error('no data');
  }

  return data;
};

describe.skip('test chat', () => {
  it('chat by stream', async () => {
    const responseData = await sendMessagesToOpenAi();

    const reader = responseData.getReader();
    const decoder = new TextDecoder('utf-8');
    const done = false;
    const reader_content = '';
    const message = '';
    const parsed = null;
    while (!done) {
      const { value, done: readerDone } = await reader.read();
      if (value) {
        const data = decoder.decode(value);
        const lines = data
          .toString()
          .split('\n')
          .filter((line) => line.trim() !== '');
        console.log(lines);
      }
    }
  });
});

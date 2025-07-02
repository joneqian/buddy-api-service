const status_flow = {
  normal_status: ['pending', 'wait_audit', 'wait_send', 'completed'],
  exception_status: [
    'audit_failed',
    'send_failed',
    'cancelled',
    'timeout',
    'failed',
  ],
  transitions: {
    pending: {
      normal: ['wait_audit'],
      exception: ['failed'],
    },
    wait_audit: {
      normal: ['wait_send'],
      exception: ['audit_failed'],
    },
    wait_send: {
      normal: ['completed'],
      exception: ['send_failed'],
    },
    completed: null,
    failed: null,
    cancelled: null,
    timeout: null,
  },
};
// 信息收集类
const status_flow2 = {
  normal_status: ['pending', 'wait_audit', 'completed'],
  exception_status: [
    'audit_failed',
    'send_failed',
    'cancelled',
    'timeout',
    'failed',
  ],
  transitions: {
    pending: {
      normal: ['wait_audit'],
      exception: ['failed'],
    },
    wait_audit: {
      normal: ['completed'],
      exception: ['audit_failed'],
    },
    completed: null,
    failed: null,
    cancelled: null,
    timeout: null,
  },
};
// 编写一个状态机函数，根据status_flow对象和当前的状态，返回下一个状态
function nextStatus(currentStatus: string, isNormal: boolean): string | null {
  if (!status_flow.normal_status.includes(currentStatus)) {
    throw new Error('Invalid state');
  }
  const transition = status_flow.transitions[currentStatus];
  if (transition === null) {
    return null;
  }

  if (isNormal) {
    return transition.normal?.[0] || null;
  } else {
    return transition.exception?.[0] || null;
  }
}

describe('Task Template', () => {
  it('should return next status', () => {
    expect(nextStatus('pending', true)).toBe('wait_audit');
    expect(nextStatus('pending', false)).toBe('failed');
    expect(nextStatus('wait_audit', true)).toBe('wait_send');
    expect(nextStatus('wait_audit', false)).toBe('audit_failed');
    expect(nextStatus('wait_send', true)).toBe('completed');
    expect(nextStatus('wait_send', false)).toBe('send_failed');
    expect(() => nextStatus('completed', true)).toThrow('Invalid state');
  });
});

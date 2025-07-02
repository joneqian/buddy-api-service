export function getTaskNextStatus(status_flow: any, currentStatus: string, isNormal: boolean, isSkipAudit?: boolean): string | null {
  if (!status_flow.normal_status?.includes(currentStatus)) {
    throw new Error('Invalid state');
  }
  const transition = status_flow.transitions[currentStatus];
  if (transition === null) {
    return null;
  }

  if (isNormal) {
    // 如果状态是waiting_audit且跳过审核，则返回下一个状态
    const status = transition.normal?.[0] || null;
    return isSkipAudit && status === 'wait_audit' ? getTaskNextStatus(status_flow, status, true, false) : status;
  } else {
    return transition.exception?.[0] || null;
  }
}

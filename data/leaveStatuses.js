const leaveStatuses = Object.freeze({
  WAITING: 'WAITING',
  EXPIRED: 'EXPIRED',
  ACCEPTED: 'ACCEPTED',
  REJECTEDBYHOD: 'REJECTEDBYHOD',
  AUTOREJECTED: 'AUTOREJECTED',
  REJECTEDBYALT: 'REJECTEDBYALT'
});

module.exports = leaveStatuses;

// Scoring utilities for the E+H Sales Simulator

const POINTS = { excellent: 10, good: 5, poor: 0 };

function calculateScore(choicesMade) {
  return choicesMade.reduce((sum, c) => sum + (POINTS[c.quality] || 0), 0);
}

function calculateMaxScore(scenario) {
  return scenario.stages.length * 10;
}

function calculateGrade(score, maxScore) {
  if (maxScore === 0) return 'N/A';
  const pct = (score / maxScore) * 100;
  if (pct >= 90) return 'A';
  if (pct >= 75) return 'B';
  if (pct >= 60) return 'C';
  return 'D';
}

function getGradeColor(grade) {
  const map = { A: '#16a34a', B: '#2563eb', C: '#d97706', D: '#dc2626' };
  return map[grade] || '#6b7280';
}

function getGradeBg(grade) {
  const map = { A: '#f0fdf4', B: '#eff6ff', C: '#fffbeb', D: '#fef2f2' };
  return map[grade] || '#f9fafb';
}

function getGradeLabel(grade) {
  const map = {
    A: 'Excellent — Top performer',
    B: 'Good — Solid execution',
    C: 'Satisfactory — Room to improve',
    D: 'Needs work — Review key concepts'
  };
  return map[grade] || '';
}

function getQualityColor(quality) {
  if (quality === 'excellent') return '#16a34a';
  if (quality === 'good') return '#d97706';
  return '#dc2626';
}

function getQualityBg(quality) {
  if (quality === 'excellent') return '#f0fdf4';
  if (quality === 'good') return '#fffbeb';
  return '#fef2f2';
}

function getQualityLabel(quality) {
  if (quality === 'excellent') return 'Excellent (+10)';
  if (quality === 'good') return 'Good (+5)';
  return 'Poor (+0)';
}

// Question-type metadata (SPIN / pain-funnel taxonomy) — used for teaching labels
const QUESTION_TYPES = {
  rapport:    { label: 'Rapport',        color: '#6b7280', bg: '#f3f4f6' },
  situation:  { label: 'Situation Q',    color: '#64748b', bg: '#f1f5f9' },
  problem:    { label: 'Problem Q',      color: '#2563eb', bg: '#eff6ff' },
  implication:{ label: 'Implication Q',  color: '#7c3aed', bg: '#f5f3ff' },
  needpayoff: { label: 'Need-Payoff Q',  color: '#0d9488', bg: '#f0fdfa' },
  solution:   { label: 'Solution / Close', color: '#d97706', bg: '#fffbeb' }
};

function getTypeMeta(type) {
  return QUESTION_TYPES[type] || { label: type || '', color: '#6b7280', bg: '#f3f4f6' };
}

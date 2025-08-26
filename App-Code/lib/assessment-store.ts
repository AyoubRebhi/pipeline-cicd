export type AssessmentEntry = {
  text: string;
  assessment: unknown;
};

export const assessmentStore: Map<string, AssessmentEntry> = new Map();

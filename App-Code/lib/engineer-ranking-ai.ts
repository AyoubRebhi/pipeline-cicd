export type Engineer = {
  ingenieur_id: number;
  nom?: string;
  prenom?: string;
  email?: string;
  equipe_id?: number | null;
  competences?: string[];
};

export type Ranking = {
  ingenieur_id: number | string;
  score_compatibilite: number;
};

export class EngineerRankingAI {
  async rankEngineersForTask(description: string, engineers: Engineer[], requiredSkills: string[] = []): Promise<Ranking[]> {
    return this.simpleRank(engineers, requiredSkills);
  }

  async rankEngineersForProject(projectDescription: string, engineers: Engineer[]): Promise<{ classements_par_tache: { tache: string; classements: Ranking[] }[] }> {
    return {
      classements_par_tache: [
        { tache: "analysis", classements: this.simpleRank(engineers, []) },
        { tache: "implementation", classements: this.simpleRank(engineers, []) },
      ],
    };
  }

  async rankEngineersForJobSpecification(jobSpec: string, engineers: Engineer[]): Promise<{ classements: Ranking[]; job_analysis: Record<string, unknown> }> {
    return {
      classements: this.simpleRank(engineers, []),
      job_analysis: { summary: "stub" },
    };
  }

  async generateJobMatchingSummary(jobAnalysis: Record<string, unknown>, classements: Ranking[]): Promise<string> {
    return `Top ${Math.min(3, classements.length)} engineers suggested.`;
  }

  private simpleRank(engineers: Engineer[], requiredSkills: string[]): Ranking[] {
    // Deterministic pseudo-ranking: higher id => higher score, bias if skills match
    return [...engineers]
      .map((e, idx) => ({
        ingenieur_id: e.ingenieur_id,
        score_compatibilite: (e.ingenieur_id % 100) / 100 + (requiredSkills.length ? 0.1 : 0),
      }))
      .sort((a, b) => b.score_compatibilite - a.score_compatibilite);
  }
}

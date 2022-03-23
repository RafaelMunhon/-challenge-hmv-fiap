export interface NovaTriagem {
  infarto: string;
  infartoParentesco: string;
  obeso: string;
  medicacao: string;
  medicacaoQual: string;
  alergia: string;
  alergiaMedicamento: string;
  dores: string;
  doresGrau: string;
  doresLocal: string;
  doresCarater: string;
  doresFrequencia: string;
  doresAtividades: string;
  doresTempo: string;
}

export interface RetornoTriagem {
  urgencyRank:string;
}
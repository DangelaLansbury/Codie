/**
 * Nucleotide base
 */
export enum BaseLetter {
  A = 'A',
  C = 'C',
  G = 'G',
  U = 'U',
}

export interface Base {
  letter: BaseLetter;
  name: string;
  color: string;
}

export const b_: Record<BaseLetter, Base> = {
  A: { letter: BaseLetter.A, name: 'Adenine', color: '#783D5C' },
  C: { letter: BaseLetter.C, name: 'Cytosine', color: '#7C75C4' },
  G: { letter: BaseLetter.G, name: 'Guanine', color: '#39796B' },
  U: { letter: BaseLetter.U, name: 'Uracil', color: '#C89053' },
} as const;

/**
 * Amino acid trait
 */
export interface AminoAcidTrait {
  name: string;
  description: string;
  foldEffect: string;
}

export const AA_TRAITS: Record<string, AminoAcidTrait> = {
  hydrophobic: {
    name: 'Hydrophobic',
    description: 'Drives formation of a stabilizing hydrophobic core',
    foldEffect: 'fold inward',
  },
  hydrophilic: {
    name: 'Hydrophilic',
    description: 'Promotes hydrogen bonding for flexibility and solubility',
    foldEffect: 'stay on surface',
  },
  negCharge: {
    name: 'Negative Charge',
    description: 'Forms salt bridges with positive residues',
    foldEffect: 'stabilize structure',
  },
  posCharge: {
    name: 'Positive Charge',
    description: 'Forms salt bridges with negative residues',
    foldEffect: 'stabilize structure',
  },
  kink: {
    name: 'Kink-Forming',
    description: 'Creates a sharp bend or disrupts helices',
    foldEffect: 'bend rigidly',
  },
  flexible: {
    name: 'Flexible',
    description: 'Increases backbone flexibility',
    foldEffect: 'allow movement',
  },
  disulfide: {
    name: 'Disulfide Bonding',
    description: 'Stabilizes structure via strong covalent bonds',
    foldEffect: 'lock in place',
  },
  aromatic: {
    name: 'Aromatic',
    description: 'Stacks with other aromatic residues for stability',
    foldEffect: 'stack',
  },
  stop: {
    name: 'Stop Codon',
    description: 'Terminates translation and releases polypeptide',
    foldEffect: 'end translation',
  },
};

export function getFoldEffect(aminoAcidDetails: AminoAcidDetails): string {
  const traits = aminoAcidDetails.traits.map((trait) => trait.foldEffect).join(' + ');
  console.log(aminoAcidDetails.name, traits);
  return traits;
}

/**
 * Complete amino acid data
 */
export interface AminoAcidDetails {
  name: string;
  sideChain: string | null;
  traits: AminoAcidTrait[];
}

export const AA_INFO: Record<string, AminoAcidDetails> = {
  A: {
    name: 'Alanine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.hydrophobic],
  },
  R: {
    name: 'Arginine',
    sideChain: 'Basic',
    traits: [AA_TRAITS.posCharge],
  },
  N: {
    name: 'Asparagine',
    sideChain: 'Amide',
    traits: [AA_TRAITS.hydrophilic],
  },
  D: {
    name: 'Aspartate',
    sideChain: 'Acidic',
    traits: [AA_TRAITS.negCharge],
  },
  C: {
    name: 'Cysteine',
    sideChain: 'Sulfahydryl',
    traits: [AA_TRAITS.disulfide],
  },
  Q: {
    name: 'Glutamine',
    sideChain: 'Amide',
    traits: [AA_TRAITS.hydrophilic],
  },
  E: {
    name: 'Glutamate',
    sideChain: 'Acidic',
    traits: [AA_TRAITS.negCharge],
  },
  G: {
    name: 'Glycine',
    sideChain: 'Simple',
    traits: [AA_TRAITS.flexible],
  },
  H: {
    name: 'Histidine',
    sideChain: 'Imidazole',
    traits: [AA_TRAITS.posCharge],
  },
  I: {
    name: 'Isoleucine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.hydrophobic],
  },
  L: {
    name: 'Leucine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.hydrophobic],
  },
  K: {
    name: 'Lysine',
    sideChain: 'Basic',
    traits: [AA_TRAITS.posCharge],
  },
  M: {
    name: 'Methionine',
    sideChain: 'Sulfahydryl',
    traits: [AA_TRAITS.hydrophobic],
  },
  F: {
    name: 'Phenylalanine',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.hydrophobic, AA_TRAITS.aromatic],
  },
  P: {
    name: 'Proline',
    sideChain: 'Cyclic imido group',
    traits: [AA_TRAITS.kink],
  },
  S: {
    name: 'Serine',
    sideChain: 'Hydroxyl',
    traits: [AA_TRAITS.hydrophilic],
  },
  T: {
    name: 'Threonine',
    sideChain: 'Hydroxyl',
    traits: [AA_TRAITS.hydrophilic],
  },
  W: {
    name: 'Tryptophan',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.aromatic],
  },
  Y: {
    name: 'Tyrosine',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.hydrophilic, AA_TRAITS.aromatic],
  },
  V: {
    name: 'Valine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.hydrophobic],
  },
  '*': {
    name: 'Stop',
    sideChain: 'Stop Codon',
    traits: [AA_TRAITS.stop],
  },
};

/**
 * Base combinations, amino acids, and details
 */
export interface AminoAcidData {
  name: string;
  abbr: string;
  letter: string;
  b1: (typeof b_)[keyof typeof b_];
  b2: (typeof b_)[keyof typeof b_];
  b3: (typeof b_)[keyof typeof b_][];
  details: AminoAcidDetails;
}

export const AA: AminoAcidData[] = [
  { name: 'Histidine', abbr: 'His', letter: 'H', b1: b_.C, b2: b_.A, b3: [b_.U, b_.C], details: AA_INFO['H'] },
  { name: 'Glutamine', abbr: 'Gln', letter: 'Q', b1: b_.C, b2: b_.A, b3: [b_.A, b_.G], details: AA_INFO['Q'] },
  { name: 'Proline', abbr: 'Pro', letter: 'P', b1: b_.C, b2: b_.C, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['P'] },
  { name: 'Arginine', abbr: 'Arg', letter: 'R', b1: b_.C, b2: b_.G, b3: [b_.A, b_.C, b_.U, b_.G], details: AA_INFO['R'] },
  { name: 'Leucine', abbr: 'Leu', letter: 'L', b1: b_.C, b2: b_.U, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['L'] },

  { name: 'Aspartate', abbr: 'Asp', letter: 'D', b1: b_.G, b2: b_.A, b3: [b_.U, b_.C], details: AA_INFO['D'] },
  { name: 'Glutamate', abbr: 'Glu', letter: 'E', b1: b_.G, b2: b_.A, b3: [b_.A, b_.G], details: AA_INFO['E'] },
  { name: 'Alanine', abbr: 'Ala', letter: 'A', b1: b_.G, b2: b_.C, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['A'] },
  { name: 'Glycine', abbr: 'Gly', letter: 'G', b1: b_.G, b2: b_.G, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['G'] },
  { name: 'Valine', abbr: 'Val', letter: 'V', b1: b_.G, b2: b_.U, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['V'] },

  { name: 'Tyrosine', abbr: 'Tyr', letter: 'Y', b1: b_.U, b2: b_.A, b3: [b_.U, b_.C], details: AA_INFO['Y'] },
  { name: 'Stop', abbr: 'STP', letter: '*', b1: b_.U, b2: b_.A, b3: [b_.A, b_.G], details: AA_INFO['*'] },
  { name: 'Serine', abbr: 'Ser', letter: 'S', b1: b_.U, b2: b_.C, b3: [b_.U, b_.C, b_.A, b_.G], details: AA_INFO['S'] },
  { name: 'Cysteine', abbr: 'Cys', letter: 'C', b1: b_.U, b2: b_.G, b3: [b_.U, b_.C], details: AA_INFO['C'] },
  { name: 'Stop', abbr: 'STP', letter: '*', b1: b_.U, b2: b_.G, b3: [b_.A], details: AA_INFO['*'] },
  { name: 'Tryptophan', abbr: 'Trp', letter: 'W', b1: b_.U, b2: b_.G, b3: [b_.G], details: AA_INFO['W'] },
  { name: 'Phenylalanine', abbr: 'Phe', letter: 'F', b1: b_.U, b2: b_.U, b3: [b_.C, b_.U], details: AA_INFO['F'] },
  { name: 'Leucine', abbr: 'Leu', letter: 'L', b1: b_.U, b2: b_.U, b3: [b_.A, b_.G], details: AA_INFO['L'] },

  { name: 'Asparagine', abbr: 'Asn', letter: 'N', b1: b_.A, b2: b_.A, b3: [b_.U, b_.C], details: AA_INFO['N'] },
  { name: 'Lysine', abbr: 'Lys', letter: 'K', b1: b_.A, b2: b_.A, b3: [b_.A, b_.G], details: AA_INFO['K'] },
  { name: 'Threonine', abbr: 'Thr', letter: 'T', b1: b_.A, b2: b_.C, b3: [b_.C, b_.U, b_.A, b_.G], details: AA_INFO['T'] },
  { name: 'Serine', abbr: 'Ser', letter: 'S', b1: b_.A, b2: b_.G, b3: [b_.C, b_.U], details: AA_INFO['S'] },
  { name: 'Arginine', abbr: 'Arg', letter: 'R', b1: b_.A, b2: b_.G, b3: [b_.A, b_.G], details: AA_INFO['R'] },
  { name: 'Isoleucine', abbr: 'Ile', letter: 'I', b1: b_.A, b2: b_.U, b3: [b_.A, b_.C, b_.U], details: AA_INFO['I'] },
  { name: 'Methionine', abbr: 'Met', letter: 'M', b1: b_.A, b2: b_.U, b3: [b_.G], details: AA_INFO['M'] },
];

export function aaFromCodon(b1: BaseLetter | null, b2: BaseLetter | null, b3: BaseLetter | null): AminoAcidData | null {
  if (!b1 || !b2 || !b3) return null;
  return AA.find((aa) => aa.b1.letter === b1 && aa.b2.letter === b2 && aa.b3.some((b) => b.letter === b3)) || null;
}

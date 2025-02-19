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
}

export const b_: Record<BaseLetter, Base> = {
  A: { letter: BaseLetter.A, name: 'Adenine' },
  C: { letter: BaseLetter.C, name: 'Cytosine' },
  G: { letter: BaseLetter.G, name: 'Guanine' },
  U: { letter: BaseLetter.U, name: 'Uracil' },
} as const;

// enum FoldingEffect {
//   HYDROPHOBIC = 'Hydrophobic Core',
//   HYDROPHILIC = 'Hydrophilic Surface',
//   NEG = 'Negative Charge',
//   POS = 'Positive Charge',
//   KINK = 'Kink Formation',
//   FLEX = 'Flexible Region',
//   DISULFIDE = 'Disulfide Bond',
//   STOP = 'Stop Codon',
//   AROMATIC = 'Aromatic Stacking',
// }

/**
 * Amino acid trait
 */
export interface AminoAcidTrait {
  color: string;
  foldingEffect: string;
}

export const AA_TRAITS: Record<string, AminoAcidTrait> = {
  small: {
    color: '#placeholderColorSmall',
    foldingEffect: 'Enables tight packing in protein cores',
  },
  smallest: {
    color: '#placeholderColorSmallest',
    foldingEffect: 'Allows maximum flexibility',
  },
  nonpolar: {
    color: '#placeholderColorNonpolar',
    foldingEffect: 'Drives hydrophobic interactions inside proteins',
  },
  hydrophobic: {
    color: '#placeholderColorHydrophobic',
    foldingEffect: 'Promotes folding by avoiding water',
  },
  positivelyCharged: {
    color: '#placeholderColorPositive',
    foldingEffect: 'Forms ionic bonds with negative residues',
  },
  negativelyCharged: {
    color: '#placeholderColorNegative',
    foldingEffect: 'Forms ionic bonds with positive residues',
  },
  basic: {
    color: '#placeholderColorBasic',
    foldingEffect: 'Engages in hydrogen bonding and ionic interactions',
  },
  acidic: {
    color: '#placeholderColorAcidic',
    foldingEffect: 'Participates in ionic bonds with basic residues',
  },
  polar: {
    color: '#placeholderColorPolar',
    foldingEffect: 'Forms hydrogen bonds, stabilizing structures',
  },
  uncharged: {
    color: '#placeholderColorUncharged',
    foldingEffect: 'Neutral but can form hydrogen bonds',
  },
  amide: {
    color: '#placeholderColorAmide',
    foldingEffect: 'Facilitates hydrogen bonding via amide group',
  },
  flexible: {
    color: '#placeholderColorFlexible',
    foldingEffect: 'Increases backbone flexibility',
  },
  sulfurContaining: {
    color: '#placeholderColorSulfur',
    foldingEffect: 'Can form disulfide bonds (cysteine)',
  },
  aromatic: {
    color: '#placeholderColorAromatic',
    foldingEffect: 'Allows stacking interactions, stabilizing folds',
  },
  branched: {
    color: '#placeholderColorBranched',
    foldingEffect: 'Contributes to hydrophobic cores',
  },
  rigid: {
    color: '#placeholderColorRigid',
    foldingEffect: 'Restricts backbone flexibility',
  },
  hydroxylGroup: {
    color: '#placeholderColorHydroxyl',
    foldingEffect: 'Forms hydrogen bonds; phosphorylation site',
  },
  disulfideBond: {
    color: '#placeholderColorDisulfide',
    foldingEffect: 'Stabilizes structure via covalent bonds',
  },
  bulky: {
    color: '#placeholderColorBulky',
    foldingEffect: 'Limits close packing; affects folding',
  },
  cyclic: {
    color: '#placeholderColorCyclic',
    foldingEffect: 'Introduces kinks; restricts flexibility',
  },
  '*': {
    color: '#placeholderColorStop',
    foldingEffect: 'Terminates translation',
  },
};

/**
 * Full info for each amino acid
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
    traits: [AA_TRAITS.small, AA_TRAITS.nonpolar, AA_TRAITS.hydrophobic],
  },
  R: {
    name: 'Arginine',
    sideChain: 'Basic',
    traits: [AA_TRAITS.positivelyCharged, AA_TRAITS.basic],
  },
  N: {
    name: 'Asparagine',
    sideChain: 'Polar Uncharged',
    traits: [AA_TRAITS.polar, AA_TRAITS.uncharged, AA_TRAITS.amide],
  },
  D: {
    name: 'Aspartate',
    sideChain: 'Acidic',
    traits: [AA_TRAITS.negativelyCharged, AA_TRAITS.acidic],
  },
  C: {
    name: 'Cysteine',
    sideChain: 'Sulfur-Containing',
    traits: [AA_TRAITS.polar, AA_TRAITS.disulfideBond],
  },
  Q: {
    name: 'Glutamine',
    sideChain: 'Polar Uncharged',
    traits: [AA_TRAITS.polar, AA_TRAITS.uncharged, AA_TRAITS.amide],
  },
  E: {
    name: 'Glutamate',
    sideChain: 'Acidic',
    traits: [AA_TRAITS.negativelyCharged, AA_TRAITS.acidic],
  },
  G: {
    name: 'Glycine',
    sideChain: 'Special Case',
    traits: [AA_TRAITS.smallest, AA_TRAITS.nonpolar, AA_TRAITS.flexible],
  },
  H: {
    name: 'Histidine',
    sideChain: 'Basic',
    traits: [AA_TRAITS.positivelyCharged, AA_TRAITS.basic, AA_TRAITS.aromatic],
  },
  I: {
    name: 'Isoleucine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.hydrophobic, AA_TRAITS.branched],
  },
  L: {
    name: 'Leucine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.hydrophobic, AA_TRAITS.branched],
  },
  K: {
    name: 'Lysine',
    sideChain: 'Basic',
    traits: [AA_TRAITS.positivelyCharged, AA_TRAITS.basic],
  },
  M: {
    name: 'Methionine',
    sideChain: 'Sulfur-Containing',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.sulfurContaining],
  },
  F: {
    name: 'Phenylalanine',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.aromatic],
  },
  P: {
    name: 'Proline',
    sideChain: 'Special Case',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.rigid, AA_TRAITS.cyclic],
  },
  S: {
    name: 'Serine',
    sideChain: 'Polar Uncharged',
    traits: [AA_TRAITS.polar, AA_TRAITS.uncharged, AA_TRAITS.hydroxylGroup],
  },
  T: {
    name: 'Threonine',
    sideChain: 'Polar Uncharged',
    traits: [AA_TRAITS.polar, AA_TRAITS.uncharged, AA_TRAITS.hydroxylGroup],
  },
  W: {
    name: 'Tryptophan',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.aromatic, AA_TRAITS.bulky],
  },
  Y: {
    name: 'Tyrosine',
    sideChain: 'Aromatic',
    traits: [AA_TRAITS.polar, AA_TRAITS.aromatic, AA_TRAITS.hydroxylGroup],
  },
  V: {
    name: 'Valine',
    sideChain: 'Aliphatic',
    traits: [AA_TRAITS.nonpolar, AA_TRAITS.hydrophobic, AA_TRAITS.branched],
  },
  '*': {
    name: 'Stop',
    sideChain: null,
    traits: [AA_TRAITS['*']],
  },
};

/**
 * Amino acid data
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

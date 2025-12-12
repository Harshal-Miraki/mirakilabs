// IndustrySection.ts
export interface IndustrySection {
  slug: string; // add this for dynamic routing
  headerImg: string;
  title: string;
  subtitle: string;
  matrix: { number: string; title: string }[];
  stickyContent: {
    title: string;
    description: string;
    content?: string[]; // path or text
  }[];
  quote?: {
    text: string;
    description: string;
    image: string;
  };
  trusted:{
    imag:string[];
    
  }
  challenge:{
            keyChallenges?: string[];

  }
}

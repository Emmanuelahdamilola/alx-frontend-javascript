interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

// Define functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: subject1.brand };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: subject1.brand };
}

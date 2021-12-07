import { CommitteeConfig } from '../pages/Markdown/MarkdownPage'

export const Security: CommitteeConfig = {
    name: "Security Council",
    link: "security",
    color: "#1b4787",
    beginner: false,
    headChairs: ["Zach Foster"],
    guestChairs: ["Katie Young", "Maisha Lorgat"],
    issues: [
        "The Issue of Taiwan",
        "The Issue of Afghanistan",
    ]
}

export const HRCouncil: CommitteeConfig = {
    name: "Human Rights Council",
    link: "hr-council",
    color: "#F758EB",
    beginner: false,
    headChairs: ["Oliver Sandall"],
    guestChairs: ["Aamana Noor", "Catrin Barrowcliffe"],
    issues: [
        "The Issue of Anti-Discrimination Education",
        "The Issue of Freedom of Expression on the Internet",
    ]
}

export const HRCommittee: CommitteeConfig = {
    name: "Human Rights Committee",
    link: "hr-committee",
    color: "#A552F5",
    beginner: false,
    headChairs: ["Nick Barclay"],
    guestChairs: ["Simi Khan", "Tilly Young"],
    issues: [
        "The Issue of Unaccompanied Migrant Children and Adolescents",
        "The Issue of the Effect of Climate Change on Poor Communities",
    ]
}

export const Speccom: CommitteeConfig = {
    name: "Special Committee on Technology",
    link: "tech-speccom",
    color: "#435D3D",
    beginner: false,
    headChairs: ["Euan Aspin"],
    guestChairs: ["Amy Upton", "Josephine Revans"],
    issues: [
        "The Issue of Closing the Technology Gap",
        "The Issue of Cryptocurrencies",
    ]
}

export const Political: CommitteeConfig = {
    name: "Political Committee",
    link: "political",
    color: "#4689EC",
    beginner: false,
    headChairs: ["Patrick Hill-Aspinall"],
    guestChairs: ["Safiyah Khan", "Shreya Mehta"],
    issues: [
        "The Issue of Territorial Claims in the South China Sea",
        "The Issue of Election Security",
    ]
}

export const EcoFin: CommitteeConfig = {
    name: "EcoFin Committee",
    link: "ecofin",
    color: "#0D9807",
    beginner: false,
    headChairs: ["Marc Kadir"],
    guestChairs: ["Olivia Hall", "Ronan McAuliffe"],
    issues: [
        "The Issue of Economic Recovery Post-COVID",
        "The Issue of Global Pensions and Old-Age Income Poverty",
    ]
}

export const DISEC: CommitteeConfig = {
    name: "DISEC",
    link: "disec",
    color: "#F1A10D",
    beginner: false,
    headChairs: ["Hassan Tahir", "Luke Chadwick"],
    guestChairs: ["Hannah Hashimi"],
    issues: [
        "The Issue of Nuclear Submarine Treaties",
        "The Issue of Drones in Afghan Airspace",
    ]
}

export const HealthAndSocial: CommitteeConfig = {
    name: "Health and Social Committee",
    link: "health",
    color: "#FF4242",
    beginner: true,
    headChairs: ["Imran Mohammed"],
    guestChairs: ["Evie Lomas", "Ananya Ruia"],
    issues: [
        "The Issue of Inaccessibility to Medicines",
        "The Issue of Creating an International Pandemic Treaty",
    ]
}

export const EnviroSci: CommitteeConfig = {
    name: "EnviroSci Committee",
    link: "envirosci",
    color: "#08D054",
    beginner: true,
    headChairs: ["Ethan Cocker", "Junayd Shoaib"],
    guestChairs: ["Nanaki Singh"],
    issues: [
        "The Issue of Ocean Pollution",
        "The Issue of Sustainable Transport"
    ]
}

export const committees = [
    Security,
    HRCouncil,
    HRCommittee,
    Speccom,
    Political,
    EcoFin,
    DISEC,
    HealthAndSocial,
    EnviroSci,
]

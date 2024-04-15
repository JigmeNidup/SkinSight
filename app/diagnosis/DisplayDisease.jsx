"use client";
import React, { useEffect, useState } from "react";
import TextToSpeech from "@/components/TextToSpeech";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const DisplayDiseaseComp = ({ dname }) => {
  const [diseaseDetails, setDisease] = useState({
    name: "",
    desc: "",
    cause: "",
    symptoms: "",
    treatment: "",
  });

  const diseaseList = [
    {
      name: "",
      desc: "",
      cause: "",
      symptoms: "",
      treatment: "",
    },
    {
      name: "BA-cellulitis",
      desc: "Cellulitis is a bacterial skin infection that typically affects the deeper layers of your skin and the subcutaneous tissues. It's usually caused by bacteria entering through a break or crack in your skin. While cellulitis can occur anywhere on your body, it most commonly affects the legs, although it can also occur on the arms and face.",
      cause: "",
      symptoms: "",
      treatment: "",
    },
    {
      name: "BA-impetigo",
      desc: "Impetigo is a highly contagious bacterial skin infection that commonly affects children, although it can occur in people of any age. It's characterized by the formation of red sores or blisters that rupture and develop a honey-colored crust. These sores can occur anywhere on the body but are most frequently found around the nose and mouth.",
      cause:
        "Impetigo is primarily caused by two types of bacteria: Streptococcus pyogenes and Staphylococcus aureus. These bacteria can enter the skin through cuts, scrapes, insect bites, or other breaks in the skin's surface. The infection is highly contagious and can spread through direct contact with an infected person or by touching contaminated surfaces.",
      symptoms:
        "Symptoms of impetigo can include:Red sores or blisters that quickly rupture Formation of a honey-colored crust over the sores Itching or discomfort in the affected area Swollen lymph nodes in severe cases Fever (less common)",
      treatment:
        "Treatment for impetigo typically involves both topical and oral antibiotics to eradicate the bacterial infection and prevent its spread. Your doctor may prescribe: Topical antibiotics: These are usually applied directly to the affected skin and may come in the form of ointments or creams. Common topical antibiotics for impetigo include mupirocin and fusidic acid.Oral antibiotics: In cases of widespread or severe impetigo, or if topical treatment alone is not effective, oral antibiotics may be prescribed. Common oral antibiotics for impetigo include cephalexin, dicloxacillin, or amoxicillin.",
    },
    {
      name: "FU-athlete-foot",
      desc: "Athlete's foot is a fungal infection that commonly affects the skin between the toes but can also spread to the soles and sides of the feet. It's caused by various types of fungi, including Trichophyton and Epidermophyton species. The warm and moist environment created by sweaty socks and shoes provides an ideal breeding ground for these fungi.",
      cause:
        "Athlete's foot is typically caused by coming into contact with the fungi responsible for the infection. This can happen by walking barefoot in damp public places such as locker rooms, showers, swimming pools, and gymnasiums. Wearing tight, poorly ventilated shoes for prolonged periods can also contribute to the development of athlete's foot.",
      symptoms:
        "The most common symptoms of athlete's foot include: Itching, often intense, between the toes Scaling, cracking, or peeling of the skin on the soles or tops of your feet Burning or stinging sensation Rawness between the toes Blisters Dryness Foul odor, treatment:Athlete's foot is usually treated with over-the-counter antifungal medications applied directly to the skin. These medications come in various forms, including creams, lotions, gels, sprays, and powders. Clotrimazole, miconazole, and terbinafine are some common antifungal medications used to treat athletes foot.",
    },
    {
      name: "FU-nail-fungus",
      desc: "Nail fungus is a common infection that affects the fingernails or toenails. It occurs when fungi invade the nail plate, the hard part of your nail, causing it to become discolored, thickened, and brittle. While generally not serious, nail fungus can be unsightly and difficult to treat.",
      cause:
        "Several types of fungus can cause nail infections. The most common culprits include: Dermatophytes: These fungi are responsible for athlete's foot and jock itch, and they can spread to the nails from these infections. Yeasts: Candida, a type of yeast, can also cause nail fungus, particularly in people with weakened immune systems. Molds: Less commonly, molds can invade the nails and cause infection.",
      symptoms:
        "The most common symptoms of nail fungus include: Discoloration: The nail may turn white, yellow, brown, or black. Thickening: The nail may become thicker and harder. Brittleness: The nail may become crumbly and break easily. Distortion: The nail may become misshapen. Debris buildup: Debris may accumulate under the nail. Separation: In severe cases, the nail may separate from the nail bed (the skin under the nail). Pain: Occasionally, a nail infection can cause pain or discomfort, especially if the nail becomes ingrown.",
      treatment:
        "Treating nail fungus can be challenging because the fungus is difficult to reach with topical medications. Here are the common treatment options: Over-the-counter antifungal creams or lacquers: These medications may be effective for mild cases. However, they require consistent application for several months and may not always be successful. Prescription antifungal pills: Oral antifungal medications are typically more effective than topical treatments, especially for severe or widespread infections. However, they can have side effects and require monitoring by a doctor. Laser treatment: Laser therapy is a relatively new option for treating nail fungus. It uses laser beams to kill the fungus. While promising, laser treatment may not be covered by insurance and can be expensive.",
    },
    {
      name: "FU-ringworm",
      desc: "Ringworm, also known as tinea, is a contagious fungal infection that affects the skin, scalp, or nails. Despite its name, it has nothing to do with worms. The name comes from the ring-shaped rash it often causes.",
      cause:
        "Several types of mold-like fungi can cause ringworm. The specific type determines which part of the body is infected: Tinea corporis: Affects the body (skin) Tinea capitis: Affects the scalp Tinea pedis (athlete's foot): Affects the feet Tinea cruris (jock itch): Affects the groin, inner thighs, and buttocks Tinea unguium (onychomycosis): Affects the fingernails or toenails (This is what you asked about earlier!)",
      symptoms:
        "Symptoms vary depending on the location of the infection, but generally include: Itchy, red, scaly patches on the skin, often forming a ring-shaped pattern with a clear center. Hair loss in patches on the scalp (tinea capitis). Thickened, discolored, and brittle nails (tinea unguium).Burning or stinging sensation in the affected area.",
      treatment:
        "Treatment for ringworm typically involves antifungal medications applied directly to the skin (topical) or taken orally (pills). The duration of treatment depends on the severity of the infection. Here's a breakdown: Topical antifungal creams, lotions, or gels: Effective for most mild to moderate cases of ringworm on the skin, scalp, or groin. Clotrimazole, miconazole, and terbinafine are common options. Oral antifungal medications: Prescribed for severe or widespread infections, scalp infections (tinea capitis), or nail fungus (tinea unguium). Itraconazole, griseofulvin, and terbinafine are some examples.",
    },
    {
      name: "PA-cutaneous-larva-migrans",
      desc: "Cutaneous larva migrans, also known as creeping eruption, is a skin infection caused by the larvae of various hookworm parasites. These parasites typically infect animals like dogs and cats,",
      cause:
        "The primary culprits behind CLM are hookworm larvae from the Ancylostomatidae family. These larvae are present in the intestines of infected animals like dogs, cats, and wild animals. When these animals defecate on warm, moist soil, the eggs in their feces hatch into larvae. These larvae can then penetrate the skin of humans who walk barefoot or come into contact with the contaminated soil.",
      symptoms:
        "The most common symptom of CLM is an itchy, red, raised, and (wān yán - winding) track or eruption on the skin. This track appears as the larvae migrate under the skin's surface. Here's a breakdown of the symptoms: Non-specific eruption: An initial bump or irritation may appear at the site where the larvae penetrated the skin. Itching: Intense itching is a hallmark symptom, often starting within 30 minutes of larval penetration. Migrating tracks: These are slightly raised, red, or pink (wān yán) lines that can be 2-3 mm wide and extend a few centimeters from the initial infection site.",
      treatment:
        "CLM is usually self-limited, meaning the larvae eventually die off on their own. However, the intense itching can be quite bothersome. Here are the treatment options: Oral medications: Doctors may prescribe medications like thiabendazole, albendazole, or ivermectin to kill the larvae and relieve symptoms. Topical medications: In some cases, topical creams containing thiabendazole may be used for localized treatment.",
    },
    {
      name: "VI-chickenpox",
      desc: "Chickenpox, also known as varicella, is a very contagious disease caused by the varicella-zoster virus (VZV). It's characterized by an itchy, blister-like rash that spreads throughout the body. While typically mild in children, it can be more serious for adults, pregnant women, and people with weakened immune systems.",
      cause:
        "The sole cause of chickenpox is the varicella-zoster virus (VZV). This virus belongs to the herpesvirus family, the same family that causes shingles in adults. Once a person has chickenpox, the virus stays dormant in their nerve cells and can reactivate later in life as shingles.",
      symptoms:
        "Chickenpox typically follows a specific pattern of symptoms: Early Stage (1-2 days before the rash): Fever (low-grade) Feeling tired (malaise) Loss of appetite Headache Rash Stage (4-5 days):",
      treatment:
        "Chickenpox itself has no specific cure. Treatment focuses on relieving symptoms and preventing complications. Here's what to expect: Over-the-counter medications: Medications like calamine lotion or diphenhydramine (Benadryl) can help relieve itching. Fever reducers: Acetaminophen (Tylenol) can help manage fever. (Aspirin is not recommended due to the risk of Reye's syndrome.)",
    },
    {
      name: "VI-shingles",
      desc: "Shingles, also known as herpes zoster, is a viral infection that causes a painful rash with blisters. It's caused by the reactivation of the varicella-zoster virus (VZV), the same virus that causes chickenpox. After someone has chickenpox, the virus lies dormant in their nerve cells. Years later, the virus can reactivate as shingles, especially in adults over 50 or those with weakened immune systems. Shingles is characterized by a painful rash with blisters that typically appears in a band or stripe on one side of the body, often along the torso or face. The rash can be accompanied by burning pain, even before the blisters erupt. Shingles is not contagious in the same way as chickenpox, but the varicella-zoster virus itself is contagious. People who have never had chickenpox or the chickenpox vaccine can develop chickenpox if they come into direct contact with the fluid from the shingles blisters.",
      cause:
        "The reactivation of the varicella-zoster virus is the sole cause of shingles. This reactivation can be triggered by several factors, including: Age: The risk of shingles increases significantly after 50 years old. Weakened immune system: Conditions like HIV/AIDS, certain medications, or chronic diseases can weaken the immune system and increase the risk of shingles. Stress: Severe emotional or physical stress may trigger a shingles outbreak.",
      symptoms:
        "Shingles typically follows a specific pattern of symptoms: Pre-rash Stage (1-2 days before the rash): Tingling, burning, or numbness on one side of the face or body, often in a stripe-like pattern. Fever (low-grade) Headache Fatigue Rash Stage (3-5 days after pre-rash symptoms):",
      treatment:
        "There's no cure for shingles, but early treatment can reduce the severity and duration of the illness and the risk of developing PHN. Here are the main treatment options: Antiviral medications: Medications like acyclovir, valacyclovir, or famciclovir can help shorten the duration of the illness and reduce the severity of the rash and pain. Early treatment within 72 hours of the rash appearing is crucial for the best results.",
    },
  ];

  useEffect(() => {
    let temp = diseaseList.filter(val => val.name === dname);
    console.log(dname, temp);
    setDisease(temp[0]);
  }, [dname]);

  return (
    <div>
      <span>Play Voice</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <TextToSpeech text={diseaseDetails.desc} />
      <Typography>
        <Title>{diseaseDetails.name}</Title>
        <Paragraph>{diseaseDetails.desc}</Paragraph>

        <Title>Cause</Title>
        <TextToSpeech text={diseaseDetails.cause} />
        <Paragraph>{diseaseDetails.cause}</Paragraph>

        <Title>Symptoms</Title>
        <TextToSpeech text={diseaseDetails.symptoms} />
        <Paragraph>{diseaseDetails.symptoms}</Paragraph>

        <Title>Treatments</Title>
        <TextToSpeech text={diseaseDetails.treatment} />
        <Paragraph>{diseaseDetails.treatment}</Paragraph>
      </Typography>
    </div>
  );
};

export default DisplayDiseaseComp;

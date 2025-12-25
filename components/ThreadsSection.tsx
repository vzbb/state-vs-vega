import React, { useState } from 'react';
import { 
  GitMerge, 
  UserX, 
  Unlock, 
  AlertOctagon, 
  EyeOff, 
  Radio, 
  Skull, 
  Siren, 
  ChevronDown, 
  ChevronUp,
  Fingerprint,
  Lock,
  Accessibility,
  Target,
  Activity,
  ChevronRight,
  FileText
} from 'lucide-react';
import { ViewState } from '../types';

interface Thread {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  summary: string;
  documentTitle: string;
  fullContent: string[];
  points: string[];
  color: string; // For the ambient glow effect
  themeColor: string; // Base color name for dynamic hover classes (e.g., 'indigo', 'teal')
}

interface ThreadsSectionProps {
  setView: (view: ViewState) => void;
}

const getColorValue = (colorName: string) => {
  const colors: Record<string, string> = {
    indigo: '#6366f1',
    teal: '#14b8a6',
    rose: '#f43f5e',
    amber: '#f59e0b',
    emerald: '#10b981',
    red: '#ef4444',
  };
  return colors[colorName] || '#14b8a6';
};

const ThreadsSection: React.FC<ThreadsSectionProps> = ({ setView }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleThread = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const threads: Thread[] = [
    {
      id: 1,
      title: "The Becker Contagion",
      subtitle: "Systemic Misidentification",
      icon: <Fingerprint className="text-indigo-400" size={24} />,
      color: "bg-indigo-500",
      themeColor: "indigo",
      summary: "The pervasive misidentification of Christopher Foster as 'Ed Becker' corrupted the evidentiary record from inception.",
      documentTitle: "MEMORANDUM ON IDENTITY: THE 'BECKER' ANOMALY",
      fullContent: [
        "1. FACTUAL PREDICATE",
        "The Prosecution’s case rests on the events of March 15, 2024. However, the integrity of the State’s investigation is fatally compromised by the systematic misidentification of the primary aggressor, Christopher Foster. At the scene, Foster—Ashtabula County’s most wanted fugitive—provided the alias 'Ed Becker.' Despite access to mobile biometric scanners and Foster’s prominent status on the 'Most Wanted' list, responding officers accepted this alias without verification.",
        "2. LEGAL IMPLICATIONS (BRADY/GIGLIO)",
        "This was not a harmless clerical error. By booking and subsequently releasing Foster as 'Becker,' the State suppressed material evidence regarding the coercive dynamics in the vehicle. The defense was initially provided discovery that listed a low-level associate as the passenger, concealing the fact that Mr. Vega was trapped in a confined space with a desperate fugitive facing decades of incarceration. This misidentification deprived the defense of the immediate ability to contextualize Mr. Vega’s actions as those of a hostage rather than a co-conspirator.",
        "3. SYSTEMIC FAILURE",
        "The persistence of the 'Becker' alias across multiple police reports, hospital admission forms, and initial charging documents suggests either gross negligence or a deliberate effort to shield Foster. If Foster was a confidential informant (CI), this misidentification would constitute a calculated deception by the CEAAC Task Force, rendering the entire prosecution of Mr. Vega a fruit of the poisonous tree."
      ],
      points: [
        "Foster recorded only as 'Ed Becker' in official reports.",
        "Concealment of Foster's #1 Most Wanted status.",
        "False narrative infected plea negotiations."
      ]
    },
    {
      id: 2,
      title: "The Illusion of Choice",
      subtitle: "Deconstructing Perceived Opportunities",
      icon: <Lock className="text-teal-400" size={24} />,
      color: "bg-teal-500",
      themeColor: "teal",
      summary: "Vega's compliance was a 'freeze/appease' trauma response, not an admission of guilt.",
      documentTitle: "PSYCHOLOGICAL & NEUROLOGICAL ANALYSIS",
      fullContent: [
        "1. THE 'FREEZE' RESPONSE",
        "The State argues that Mr. Vega’s failure to verbally alert officers constitutes acquiescence. This argument ignores the neurological reality of the 'Freeze/Appease' response in trauma survivors. Mr. Vega, a triple amputee with a history of medical powerlessness, exhibited classic signs of dissociation during the traffic stop. His silence was not strategic; it was physiological.",
        "2. PHYSICAL IMPOSSIBILITY",
        "The Prosecution asserts Mr. Vega could have stopped the vehicle. This presumes he had control. Witness testimony and reconstruction indicate that Danielle Allen, the front-seat passenger, physically seized the steering wheel and gear shift lever. With no hands to fight back and his prosthetics limited in dexterity, Mr. Vega was physically overridden.",
        "3. THE ILLUSION OF EXIT",
        "To exit the vehicle, Mr. Vega requires a specific sequence of movements and equipment (his walker). He cannot 'jump and run.' When Foster commanded him to drive, threats were backed by the immediate physical presence of a violent offender. The 'opportunity' to exit the vehicle cited by the prosecution is a fiction that exists only for an able-bodied person in a non-coercive environment."
      ],
      points: [
        "Learned helplessness from years of medical trauma.",
        "Physical prevention: Allen seizing the wheel.",
        "Surrender was a survival reflex, not strategy."
      ]
    },
    {
      id: 3,
      title: "The Calculated Disablement",
      subtitle: "Psychological Warfare",
      icon: <Accessibility className="text-rose-400" size={24} />,
      color: "bg-rose-500",
      themeColor: "rose",
      summary: "Foster's violent ejection of Vega's walker was a surgical strike against Vega's identity.",
      documentTitle: "EVIDENCE LOG: THE WALKER EJECTION",
      fullContent: [
        "1. THE ACT OF DISABLEMENT",
        "At approximately 22:11:05, bodycam footage captures Christopher Foster throwing Mr. Vega’s walker out of the passenger window. This single act fundamentally altered the legal nature of the event from a 'pursuit' to a 'kidnapping.'",
        "2. DEPRIVATION OF MOBILITY",
        "For Mr. Vega, the walker is not an accessory; it is a prosthetic extension of his body. By ejecting it, Foster stripped Vega of his bipedal mobility. This created a state of enforced dependency. Vega could not flee on foot. He could not walk to safety. He was effectively shackled to the driver’s seat.",
        "3. DURESS ANALYSIS",
        "Under Ohio law, the defense of Duress requires a well-grounded fear of immediate death or great bodily harm with no reasonable means of escape. The ejection of the walker eliminated the 'reasonable means of escape.' From that moment forward, Mr. Vega was operating under total physical and psychological duress. To prosecute him for driving away is to prosecute him for not crawling onto a highway to escape a captor."
      ],
      points: [
        "Targeted Vega's primary vulnerability.",
        "Violently dismissed decades of rehabilitation.",
        "Rendered escape a physical impossibility."
      ]
    },
    {
      id: 4,
      title: "The Unconscionable Price",
      subtitle: "Medical Reality vs. State Capacity",
      icon: <Skull className="text-rose-600" size={24} />,
      color: "bg-rose-700",
      themeColor: "rose",
      summary: "Incarceration is a death sentence due to Vega's unique medical fragility.",
      documentTitle: "MEDICAL BRIEF: EIGHTH AMENDMENT VIOLATION",
      fullContent: [
        "1. THE PHENIX DEVICE",
        "Mr. Vega carries a Phenix/Repiphysis expandable endoprosthesis, implanted in 2004. This device, designed for pediatric limb salvage, contains a complex internal gearbox and magnetic expansion mechanism. It was intended for temporary use (3-5 years). It has been in situ for 20 years.",
        "2. IMMINENT CATASTROPHE",
        "Recent imaging confirms the device is suffering from mechanical fatigue and metallosis (metal poisoning). The device is currently protruding subcutaneously at the hip. The skin barrier is paper-thin. In a correctional environment—characterized by concrete floors, poor hygiene, and MRSA prevalence—a breach of this skin barrier is a statistical certainty.",
        "3. THE FATALITY CASCADE",
        "Once the skin breaches, biofilm bacteria will colonize the implant surface. Because the implant is avascular (has no blood supply), systemic antibiotics cannot clear the infection. The only treatment is total explantation of the femur and hip structure—a procedure with a 40-60% mortality rate in this context due to sepsis. Incarceration is, therefore, a sentence of death by septic shock."
      ],
      points: [
        "Failed Phenix implant is a ticking time bomb.",
        "Correctional environment guarantees injury.",
        "Inability to provide complex revision surgery."
      ]
    },
    {
      id: 5,
      title: "The Scapegoat Gambit",
      subtitle: "Calculated Framing",
      icon: <Target className="text-amber-400" size={24} />,
      color: "bg-amber-500",
      themeColor: "amber",
      summary: "Foster and Allen sacrificed Vega to facilitate their own escape.",
      documentTitle: "STRATEGIC ANALYSIS: ASYMMETRIC WARFARE",
      fullContent: [
        "1. ASYMMETRIC MOTIVATION",
        "Christopher Foster and Danielle Allen had warrants for drug trafficking and violent felonies. They faced years in prison. Michael Vega had a clean record and a valid license. His only 'crime' was being the driver when the lights turned on.",
        "2. THE HUMAN SHIELD",
        "Foster used Vega as a human shield. By forcing Vega to drive, Foster created a diversion. He knew that if the car stopped, he would be arrested. By prolonging the chase, he created the chaos necessary for his own foot bail. The evidence shows Foster and Allen communicating in whispers, coordinating their exit while Vega remained frozen.",
        "3. PROSECUTORIAL DEFLECTION",
        "The State is prosecuting Vega to cover for the fact that they let the 'big fish' (Foster) go. Convicting Vega provides a 'resolution' to the March 15th incident file, allowing the Task Force to bury the embarrassment of releasing a Most Wanted fugitive who went on to kill."
      ],
      points: [
        "Vega had innocent intent (Hobby Town).",
        "Foster/Allen had warrants and drug motives.",
        "Used Vega as unwitting collateral damage."
      ]
    },
    {
      id: 6,
      title: "The Coordinated Extraction?",
      subtitle: "Anomalous Circumstances",
      icon: <Radio className="text-emerald-400" size={24} />,
      color: "bg-emerald-500",
      themeColor: "emerald",
      summary: "Highly improbable events surrounding Danielle Allen's flight suggest LE complicity.",
      documentTitle: "INVESTIGATIVE REPORT: THE GHOST EXTRACTION",
      fullContent: [
        "1. THE 4-MINUTE GAP",
        "Dispatch logs show a complete cessation of radio traffic regarding the female suspect (Allen) between 22:14 and 22:18. This 'Ghost Gap' corresponds exactly to the time she fled the vehicle.",
        "2. THE OFF-DUTY INTERVENTION",
        "Danielle Allen was not apprehended by the K-9 unit or the pursuing cruisers. She was 'collected' by an off-duty Ashtabula Police Officer in his personal vehicle. This officer was parked at the exact intersection where she fled. He transported her to a hospital, where she was released without charge.",
        "3. INFORMANT DYNAMICS",
        "This sequence of events is highly consistent with the 'extraction' of a Confidential Informant. Standard procedure for a passenger in a high-speed chase involves felony stop procedures, handcuffs, and booking. The 'soft landing' provided to Allen—and by extension, Foster's release—strongly implies they were protected assets of the Task Force."
      ],
      points: [
        "Off-duty officer parked exactly where Allen fled.",
        "Allen never charged despite initiating the flight.",
        "Suggests potential Confidential Informant (CI) status."
      ]
    },
    {
      id: 7,
      title: "The Percival Echo",
      subtitle: "Deflection from Systemic Failure",
      icon: <Siren className="text-red-400" size={24} />,
      color: "bg-red-500",
      themeColor: "red",
      summary: "Vega's prosecution deflects from the fatal consequences of Foster's erroneous release.",
      documentTitle: "VICTIM IMPACT: THE PERCIVAL CAUSATION",
      fullContent: [
        "1. CAUSATION",
        "The negligence of March 15th did not end when the sirens stopped. By releasing Christopher Foster (as 'Becker'), the State unleashed a predator back into the community.",
        "2. APRIL 20, 2024",
        "Thirty-six days after his release, Christopher Foster was directly implicated in the overdose death of Stacy Percival. Had he been properly identified and held on March 15th, Stacy Percival would be alive.",
        "3. INSTITUTIONAL GUILT",
        "The prosecution of Michael Vega is an attempt to silence this narrative. If Vega is exonerated, the question becomes: 'Why was Foster free?' The answer leads directly to the negligence of the Task Force and the death of Ms. Percival. Vega is being sacrificed to protect the institution from liability for Percival's death."
      ],
      points: [
        "Foster's release enabled Stacy Percival's death.",
        "Prosecution of Vega distracts from LE negligence.",
        "Chief Colby suspended pending investigation."
      ]
    }
  ];

  // Determine active color for background effect
  const activeTheme = expandedId ? threads.find(t => t.id === expandedId)?.themeColor : null;

  return (
    <div className="relative min-h-screen">
       {/* Ambient Dynamic Background - Refined Parallax/Focus Effect */}
       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950">
          
          {/* Base Layer - Subtle breathing nebula */}
          <div 
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              expandedId ? 'opacity-30' : 'opacity-100'
            }`}
          >
             <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-teal-900/10 rounded-full blur-[120px] animate-pulse [animation-duration:8s]" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse [animation-duration:10s]" />
          </div>

          {/* Active Highlight Layer - Interpolates color smoothly via inline styles */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform,background-color]"
            style={{
               backgroundColor: activeTheme ? getColorValue(activeTheme) : 'transparent',
               opacity: activeTheme ? 0.15 : 0,
               transform: activeTheme ? 'translate(-50%, 0) scale(1.5)' : 'translate(-50%, 10%) scale(0.8)',
            }}
          />
           <div 
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform,background-color]"
            style={{
               backgroundColor: activeTheme ? getColorValue(activeTheme) : 'transparent',
               opacity: activeTheme ? 0.1 : 0,
               transform: activeTheme ? 'translate(0, 0) scale(1.2)' : 'translate(20%, 20%) scale(0.5)',
            }}
          />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-4 duration-700">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs md:text-sm text-zinc-500 mb-8 font-medium relative z-20">
          <button onClick={() => setView(ViewState.LANDING)} className="hover:text-teal-400 transition-colors uppercase tracking-wider">Overview</button>
          <ChevronRight size={12} />
          <span className="text-teal-500 uppercase tracking-wider">Legal Threads</span>
        </div>

        <div className="mb-16 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/20 blur-[100px] rounded-full"></div>
          <h2 className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 font-serif tracking-tight">
            A Tapestry of Tragedy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mx-auto mb-6"></div>
          <p className="relative text-lg text-zinc-300 font-serif max-w-2xl mx-auto leading-relaxed">
            This is not the prosecution of a criminal; it is the persecution of a scapegoat. 
            The following 7 threads reveal the interwoven realities of coercion, systemic failure, and medical impossibility.
          </p>
        </div>

        <div className="space-y-6">
          {threads.map((thread) => {
            const isExpanded = expandedId === thread.id;
            
            return (
              <div 
                key={thread.id} 
                className={`glass-panel rounded-xl border-l-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden ${
                  isExpanded 
                    ? `border-${thread.themeColor}-500 bg-zinc-900/95 shadow-[0_0_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transform scale-[1.02] z-10 my-8` 
                    : `border-zinc-700 hover:border-${thread.themeColor}-500/50 hover:bg-zinc-900/40 hover:translate-x-2 z-0`
                }`}
              >
                <div 
                  onClick={() => toggleThread(thread.id)}
                  className="p-6 cursor-pointer flex items-start gap-4 group"
                >
                  <div className={`p-3 rounded-lg shrink-0 transition-all duration-500 group-hover:scale-110 ${
                    isExpanded 
                      ? `bg-${thread.themeColor}-500/20 text-${thread.themeColor}-500` 
                      : `bg-zinc-800/80 text-zinc-400 group-hover:bg-${thread.themeColor}-500/10 group-hover:text-${thread.themeColor}-400`
                  }`}>
                    {React.cloneElement(thread.icon as React.ReactElement, { 
                      className: isExpanded ? `text-${thread.themeColor}-500` : 'text-current' 
                    })}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                isExpanded ? 'text-white' : 'text-zinc-200'
                            }`}>
                                {thread.title}
                            </h3>
                            <span className="hidden md:block text-zinc-600">•</span>
                            <span className={`text-sm md:text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                                isExpanded ? `text-${thread.themeColor}-500` : 'text-zinc-500'
                            }`}>{thread.subtitle}</span>
                        </div>
                        {/* Rotating Chevron */}
                        <ChevronDown 
                          className={`text-zinc-500 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
                            isExpanded ? 'rotate-180 text-white' : ''
                          }`} 
                        />
                    </div>
                    
                    <div className="relative">
                        {!isExpanded && (
                            <p className="text-zinc-400 font-serif leading-relaxed line-clamp-2 mt-2 animate-in fade-in duration-500">
                                {thread.summary}
                            </p>
                        )}
                    </div>
                  </div>
                </div>

                {/* Grid expansion animation */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-6 pb-8 pl-4 md:pl-[5.5rem] pr-6 md:pr-12 transition-all duration-700 ease-out ${
                      isExpanded 
                        ? 'opacity-100 translate-y-0 delay-200' 
                        : 'opacity-0 -translate-y-8'
                    }`}>
                      
                      {/* Document Container */}
                      <div className="bg-zinc-950/50 rounded-lg p-8 border border-zinc-800 relative overflow-hidden mb-8 shadow-inner">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-zinc-800 border-l border-b border-zinc-700 text-[10px] text-zinc-500 font-mono uppercase rounded-bl-lg flex items-center gap-2">
                           <FileText size={10} /> Official Defense Dossier // Ref: {thread.id}-2024
                        </div>
                        
                        <h4 className="font-bold text-white text-lg border-b border-zinc-700 pb-4 mb-6 tracking-wide font-serif">
                            {thread.documentTitle}
                        </h4>

                        <div className="prose prose-invert max-w-none text-zinc-300 font-serif leading-relaxed space-y-6">
                            {thread.fullContent.map((paragraph, idx) => {
                                // Simple heuristic to style headers within the text content
                                const isHeader = /^\d+\./.test(paragraph);
                                return (
                                    <p key={idx} className={`${isHeader ? `font-bold text-${thread.themeColor}-400 mt-8 mb-2 tracking-wide uppercase text-sm font-sans` : 'text-lg text-zinc-300'}`}>
                                        {paragraph}
                                    </p>
                                )
                            })}
                        </div>
                      </div>

                      <div className="bg-black/30 rounded-lg p-6 border border-white/5 backdrop-blur-sm">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Key Evidence Points</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {thread.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 bg-white/5 p-3 rounded-md border border-white/5 hover:bg-white/10 transition-colors">
                              <AlertOctagon size={16} className={`mt-0.5 shrink-0 text-${thread.themeColor}-500`} />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreadsSection;
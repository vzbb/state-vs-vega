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
  ChevronRight
} from 'lucide-react';
import { ViewState } from '../types';

interface Thread {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  summary: string;
  fullContent: string;
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
      fullContent: `The pervasive and uncorrected misidentification of Christopher Foster as "Ed Becker" throughout all official documentation and discovery materials is not merely a procedural error or a simple Brady violation, but a fundamental corruption of the evidentiary record that has systemically infected every stage of the proceedings against Michael Vega. This "Becker Contagion" has created a misleading narrative from inception, constituting a form of constructive fraud on the defense and potentially rising to the level of Outrageous Government Conduct.

It begins with Foster providing a false identity, which law enforcement accepts. Whether this was the result of negligence, incompetence, or intention remains unanswered, but the impact is undeniable: Foster—Ashtabula County's #1 Most Wanted fugitive—was concealed behind a clerical alias.

This error irrevocably tainted every subsequent step:
Law Enforcement Reports based on false info; Prosecutorial Charging Decisions made without knowledge of the true threat level; and a Defense Assessment initially built around a phantom "Ed Becker" rather than a career criminal with a decade-long drug trafficking record.`,
      points: [
        "Foster recorded only as 'Ed Becker' in official reports despite bodycam evidence.",
        "Concealment of Foster's #1 Most Wanted status.",
        "Created a false narrative that infected plea negotiations and defense assessment."
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
      fullContent: `Arguments that Mr. Vega could have simply stopped the car or signaled for help ignore the overwhelming and escalating coercion he faced. His behavior upon surrender—his silence and compliance—was not an admission of guilt or a missed opportunity, but a predictable manifestation of his diagnosed medical PTSD, specifically a "freeze/appease" trauma response honed over a lifetime of medical powerlessness.

Mr. Vega's nervous system learned that survival is best achieved not through confrontation ("fight"), but through passivity ("freeze" or "appease"). This is a deeply ingrained, instinctual neurological reflex. In that moment, the "enemy" is not a specific person, but the overwhelming power dynamic itself.

Furthermore, physical escape was annihilated. Danielle Allen physically seized the steering wheel, and the vehicle became a pressure cooker of terroristic threats. To interpret his silence as guilt is to fundamentally misunderstand the nature of his psychological condition.`,
      points: [
        "Learned helplessness from years of medical trauma.",
        "Physical prevention: Allen seizing the wheel.",
        "Surrender was a survival reflex, not a legal strategy."
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
      fullContent: `Christopher Foster's violent ejection of Michael Vega's walker was not merely an act to prevent escape but a calculated act of psychological warfare. It specifically targeted Vega's primary point of vulnerability and identity as a person with significant mobility impairments, exponentially amplifying the duress and shattering his will to resist.

For an individual like Michael Vega, his walker is far more than an assistive device; it is an extension of his personhood. Foster's threat, "If I can’t run, then neither will you," followed by the violent disposal of this essential tool, constitutes a profound act of identity-based trauma—a symbolic and literal "unmanning" designed to induce a state of absolute terror and learned helplessness.

This single action communicated: "You are no longer a person; you are an object." It transformed duress from a generalized fear into a visceral, immediate terror rooted in the stripping away of his core ability to exist in the world.`,
      points: [
        "Targeted Vega's primary vulnerability as a triple amputee.",
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
      fullContent: `Michael Vega's unique, extreme, and complex medical conditions make any form of custodial incarceration or restrictive supervision not just medically inadvisable, but a practical and constitutional impossibility. He is a triple amputee whose sole remaining limb contains a failed Phenix prototype endoprosthesis—an obsolete device with a documented 100% failure rate.

He is currently suffering from a posterior dislocation with the femoral component protruding just beneath the skin. Incarceration guarantees a catastrophic failure cascade:
Fall → Open Periprosthetic Fracture → Biofilm Infection → Fulminant Sepsis → Death.

The state is constitutionally and practically incapable of punishing Michael Vega without violating the Eighth Amendment's prohibition on cruel and unusual punishment. To incarcerate him is to knowingly place a man in an environment maximized to trigger his death.`,
      points: [
        "Failed Phenix implant is a ticking time bomb.",
        "Correctional environment guarantees catastrophic injury.",
        "Inability to provide complex multi-stage revision surgery."
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
      fullContent: `Christopher Foster and Danielle Allen, facing imminent capture for their own serious criminal activities, deliberately manipulated and sacrificed Michael Vega. They exploited his known vulnerabilities to create a diversion, facilitate their own escape, and secure more lenient treatment.

The narrative begins with Mr. Vega's innocent intent—a trip to Hobby Town with a gift card, the only item of his in the vehicle. Contrast this with "Ashtabula County's #1 Most Wanted" fugitive. The violent ejection of the walker strategically ensured Vega remained a controllable, disabled driver who could plausibly take the fall.

Vega alleges Allen physically prevented him from complying with police, seizing the steering wheel. He was unwittingly caught in a game where he was the collateral damage for career criminals who needed a scapegoat to face the severe charges they were evading.`,
      points: [
        "Vega had innocent intent (Hobby Town gift card).",
        "Foster/Allen had warrants and drug trafficking motives.",
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
      fullContent: `The highly improbable confluence of events surrounding Danielle Allen's flight—collected by an off-duty Ashtabula PD officer who "happened" to be there and joking on police radio—suggests more than mere chance. Combined with Allen's subsequent unescorted departure from hospital custody without charges, these facts raise serious questions about potential prior law enforcement knowledge or complicity.

Key anomalies include:
1. An off-duty officer parked exactly where Allen fled.
2. The officer joking on the radio that the pursuit "might pass right by" before it was visible.
3. Allen being collected by said officer, taken to a hospital, and never charged.
4. Approximately 4 minutes of missing/unexplained scanner activity.

This suggests potential "Informant Dynamics," where Allen or Foster may have been protected assets whose extraction was facilitated to protect an ongoing operation or identity.`,
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
      fullContent: `The vigorous prosecution of Michael Vega may be an institutional reaction and deflection mechanism to mitigate the severe reputational damage incurred by law enforcement's catastrophic failure: the glaringly incompetent misidentification and release of Christopher Foster on March 15.

This release directly enabled Foster to cause the overdose death of Stacy Percival on April 20, 2024. Conneaut Police Chief Michael Colby's subsequent suspension underscores the magnitude of this failure.

Prosecuting Vega allows the system to "close the book" on March 15 with a conviction, creating a narrative of resolution while implicitly downplaying the error that cost Stacy Percival her life. It is a prosecution born of a need for a "Win" to overshadow a devastating loss.`,
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
                    ? `border-${thread.themeColor}-500 bg-zinc-900/90 shadow-[0_0_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transform scale-[1.02] z-10 my-8` 
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
                      <p className="text-zinc-200 font-serif mb-8 leading-8 text-lg border-l-2 border-zinc-700 pl-6 whitespace-pre-line">
                        {thread.fullContent}
                      </p>
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
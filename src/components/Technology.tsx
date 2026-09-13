import { useState } from 'react';
import { toast } from 'react-toastify';
import technologiesData from '../data/technologies.json';

const categoryTagClass = 'bg-slate-100 text-slate-600';
const cardShellClass = 'flex min-h-[220px] w-full min-w-0 flex-col rounded-xl border bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 sm:min-h-[250px] sm:rounded-2xl sm:p-4 lg:min-h-[270px]';
const stackItemClass = 'flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50/40 p-2.5 text-slate-900';

type TechnologyItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
};

const technologies: TechnologyItem[] = technologiesData as TechnologyItem[];

const badgeStyles: Record<string, string> = {
    Popular: 'bg-blue-50 text-blue-600',
    Approachable: 'bg-emerald-50 text-emerald-600',
    Fast: 'bg-orange-50 text-orange-600',
    Essential: 'bg-amber-50 text-amber-600',
    Reliable: 'bg-sky-50 text-sky-600',
    Modern: 'bg-cyan-50 text-cyan-600',
    'Top SQL': 'bg-blue-50 text-blue-600',
    Flexible: 'bg-violet-50 text-violet-600',
    Containers: 'bg-cyan-50 text-cyan-600',
    'Full Stack': 'bg-violet-50 text-violet-600',
    Scalable: 'bg-emerald-50 text-emerald-600',
};

export const Technology = () => {
    const [stack, setStack] = useState<TechnologyItem[]>([]);

    const addToStack = (technology: TechnologyItem) => {
        if (stack.some((item) => item.id === technology.id)) {
            window.alert(`${technology.name} is already in your stack.`);
            return;
        }

        setStack((currentStack) => [...currentStack, technology]);
        toast.success(`${technology.name} added to your stack.`);
    };

    const removeFromStack = (technologyId: string) => {
        const removedTechnology = stack.find((item) => item.id === technologyId);

        if (!removedTechnology) {
            return;
        }

        setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId));
        toast.success(`${removedTechnology.name} removed from your stack.`);
    };

    const removeAllFromStack = () => {
        setStack([]);
        toast.success('All technologies removed from your stack.');
    };

    return (
     <>
      <section id="technologies" className="mx-auto max-w-7xl min-w-0 px-3 py-3 sm:px-8 sm:py-7 lg:px-10 lg:py-10">
            <div className="mb-4 max-w-2xl sm:mb-10">
                <h3 className="text-3xl font-black tracking-tight text-slate-950 text-center sm:text-left sm:text-4xl">
                    Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7 text-center sm:text-left">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(180px,0.6fr)]">
                <section className="min-w-0" aria-labelledby="technology-list-title">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                        {technologies.map((technology) => {
                            const isAdded = stack.some((item) => item.id === technology.id);
                            const badgeClass = badgeStyles[technology.badge] || 'bg-slate-50 text-slate-600';

                            return (
                                <article key={technology.id} className={`${cardShellClass} ${isAdded ? 'border-emerald-400 ring-2 ring-emerald-200 shadow-md' : 'border-slate-200 hover:shadow-lg'}`}>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-50 ring-1 ring-slate-100 sm:h-11 sm:w-11">
                                            <img className="h-6 w-6 object-contain sm:h-7 sm:w-7" src={technology.icon} alt={`${technology.name} icon`} />
                                        </div>
                                        <span className={`truncate rounded-full px-2 py-1 text-[9px] font-extrabold leading-none sm:text-[10px] ${badgeClass}`}>{technology.badge}</span>
                                    </div>
                                    <h3 className="mt-3 truncate text-sm font-extrabold leading-tight text-slate-900 sm:text-base">{technology.name}</h3>
                                    <p className="mt-1 min-h-12 flex-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">{technology.description}</p>
                                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[10px] font-semibold sm:text-xs">
                                        <span className={`truncate rounded-sm px-1.5 py-0.5 ${categoryTagClass}`}>{technology.category}</span>
                                        <span className="truncate text-slate-500">{technology.difficulty}</span>
                                        <span className="shrink-0 text-slate-700"><span className="mr-1 text-amber-400">★</span>{technology.rating}</span>
                                    </div>
                                    <button type="button" disabled={isAdded} onClick={() => addToStack(technology)} className={`mt-3 w-full rounded-md px-2 py-2.5 text-[10px] font-bold leading-none transition sm:rounded-lg sm:py-2.5 sm:text-xs ${isAdded ? 'cursor-not-allowed bg-emerald-50 text-emerald-700' : 'bg-slate-950 text-white hover:bg-orange-500'}`}>
                                        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                                    </button>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <aside className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-lg sm:mx-auto  sm:rounded-2xl sm:p-4 lg:sticky lg:top-24 lg:max-w-65 lg:min-h-50" aria-labelledby="stack-title">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 id="stack-title" className="text-lg font-extrabold sm:text-xl">Your Stack</h2>
                            <p className="mt-1 text-sm text-slate-400 sm:text-sm">{stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected</p>
                        </div>
                    </div>

                    {stack.length === 0 ? (
                        <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-7 text-center text-[11px] text-slate-400 sm:text-xs">Your stack is empty.</div>
                    ) : (
                        <div className="mt-4 space-y-2">
                            {stack.map((technology) => (
                                <div key={technology.id} className={stackItemClass}>
                                    <img className="h-7 w-7 object-contain" src={technology.icon} alt="" />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-extrabold sm:text-sm">{technology.name}</p>
                                        <p className="text-[10px] text-slate-400 sm:text-xs">{technology.category}</p>
                                    </div>
                                    <button type="button" onClick={() => removeFromStack(technology.id)} className="grid h-7 w-7 place-items-center rounded-md text-base text-slate-400 transition hover:bg-red-50 hover:text-red-500" aria-label={`Remove ${technology.name}`}>
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <button type="button" onClick={removeAllFromStack} disabled={stack.length === 0} className="mt-4 w-full rounded-lg border border-red-200 px-3 py-2 text-[11px] font-bold text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:text-xs">Remove All</button>
                </aside>
            </div>
        </section>
     </>
    );
};

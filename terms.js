(function() {
  var T = {
    'ata': {
      name: 'ATA',
      tech: 'Unit of absolute pressure. 1 ATA = sea-level pressure (101.325 kPa). Home HBOT operates at 1.5 ATA\u201450% above sea level.',
      plain: 'A way to measure pressure. 1 ATA is normal air pressure. A home chamber at 1.5 ATA is 50% higher than normal.'
    },
    'plasma': {
      name: 'Blood Plasma',
      tech: 'The liquid matrix of blood (~55% of volume). Under hyperbaric conditions, O\u2082 dissolves directly into plasma via Henry\u2019s Law, bypassing hemoglobin.',
      plain: 'The liquid part of your blood. During HBOT, extra oxygen dissolves directly into it, reaching places red blood cells can\u2019t.'
    },
    'hemoglobin': {
      name: 'Hemoglobin',
      tech: 'Iron-containing protein in red blood cells carrying ~98.5% of oxygen. Already 97\u201399% saturated at sea level\u2014HBOT\u2019s benefit comes from plasma-dissolved O\u2082.',
      plain: 'The protein in red blood cells that carries oxygen. Already maxed out at sea level\u2014HBOT works through a different route.'
    },
    'interstitial-fluid': {
      name: 'Interstitial Fluid (ISF)',
      tech: 'Extracellular fluid between cells (~15% of body weight). Plasma-dissolved O\u2082 diffuses into ISF, reaching tissue hemoglobin cannot access through damaged capillaries.',
      plain: 'The fluid surrounding every cell. HBOT\u2019s dissolved oxygen seeps into it to reach cells with damaged blood supply.'
    },
    'concentrator': {
      name: 'Oxygen Concentrator',
      tech: 'Pressure-swing adsorption device outputting ~93% O\u2082 at up to 10 LPM. At 1.5 ATA, sufficient to saturate the chamber environment.',
      plain: 'A machine that concentrates oxygen from room air to ~93%. Paired with a 1.5 ATA chamber, it delivers the full benefit.'
    },
    'ros': {
      name: 'ROS (Reactive Oxygen Species)',
      tech: 'Chemically reactive oxygen molecules. At controlled HBOT levels, they act as signaling molecules triggering antioxidant enzymes and DNA repair pathways.',
      plain: 'Molecules your body makes from extra oxygen that signal cells to activate repair and defense programs.'
    },
    'hormesis': {
      name: 'Hormesis',
      tech: 'Dose-response phenomenon where low-level stressor exposure triggers adaptive responses exceeding the original insult. The basis for exercise adaptation and HBOT.',
      plain: 'The principle that small controlled stress makes your body stronger\u2014like exercise. HBOT applies this with oxygen.'
    },
    'hif1a': {
      name: 'HIF-1\u03b1',
      tech: 'Master transcription factor activating 100+ genes for angiogenesis, erythropoiesis, and tissue repair. Hyperoxia\u2013normoxia cycling triggers HIF-1\u03b1 stabilization between sessions.',
      plain: 'A master switch protein that builds oxygen infrastructure\u2014new blood vessels, more red blood cells, tissue repair. Activated between HBOT sessions.'
    },
    'vegf': {
      name: 'VEGF',
      tech: 'Signaling protein stimulating blood vessel growth. Produced downstream of HIF-1\u03b1 activation. HBOT elevates serum VEGF via the hyperoxic-hypoxic paradox.',
      plain: 'A protein that tells your body to grow new blood vessels. HBOT raises its levels, leading to permanent new capillary formation.'
    },
    'angiogenesis': {
      name: 'Angiogenesis',
      tech: 'New capillary formation from pre-existing vasculature via HIF-1\u03b1/VEGF/SDF-1 signaling. HBOT-driven vascular remodeling persists after treatment cessation.',
      plain: 'Growing new tiny blood vessels from existing ones. HBOT triggers this, and the new vessels stay permanently.'
    },
    'enos': {
      name: 'eNOS',
      tech: 'Enzyme in bone marrow catalyzing nitric oxide production. Hyperoxia activates eNOS \u2192 NO \u2192 MMP-9 \u2192 CD34+ stem cell release into circulation.',
      plain: 'An enzyme in bone marrow that responds to HBOT by releasing stem cells into your bloodstream to find and repair damage.'
    },
    'cd34': {
      name: 'CD34+ Cells',
      tech: 'Hematopoietic progenitor cells capable of differentiating into endothelial and other tissue types. Mobilized via eNOS/MMP-9 signaling during HBOT.',
      plain: 'Your body\u2019s repair cells, stored in bone marrow. HBOT releases them into circulation\u2014a single session doubles the count.'
    },
    'telomeres': {
      name: 'Telomeres',
      tech: 'Repetitive nucleotide caps on chromosome ends that shorten with each cell division. A validated biomarker of biological aging. HBOT lengthened them 20\u201338% at 2.0 ATA.',
      plain: 'Protective caps on DNA ends that shorten as you age. A clinical trial showed HBOT lengthened them 20\u201338%\u2014but only at clinical pressure so far.'
    },
    'senescent': {
      name: 'Senescent Cells',
      tech: 'Cells in irreversible replicative arrest that resist apoptosis and secrete pro-inflammatory SASP. HBOT reduced senescent T cells 11\u201337% at 2.0 ATA.',
      plain: '\u201cZombie cells\u201d that stop working but won\u2019t die, leaking inflammatory molecules. HBOT reduced them 11\u201337% in a clinical trial.'
    },
    'sasp': {
      name: 'SASP',
      tech: 'Senescence-Associated Secretory Phenotype\u2014the pro-inflammatory secretome of senescent cells (IL-6, IL-8, TNF-\u03b1, MMPs). Drives chronic tissue inflammation.',
      plain: 'The inflammatory cocktail that zombie cells constantly leak, causing chronic inflammation and damaging nearby healthy cells.'
    },
    'nfkb': {
      name: 'NF-\u03baB',
      tech: 'Transcription factor family regulating inflammation and immune response genes. HBOT suppresses NF-\u03baB signaling, including at 1.4\u20131.5 ATA.',
      plain: 'The master switch for inflammation genes. HBOT turns it down, reducing chronic inflammation at home-chamber pressure.'
    },
    'sirtuin': {
      name: 'Sirtuins',
      tech: 'NAD\u207a-dependent deacetylase family involved in DNA repair, mitochondrial biogenesis, and stress resistance. HBOT upregulates sirtuins via HIF-1\u03b1.',
      plain: 'Proteins managing cellular repair and longevity\u2014the same ones activated by calorie restriction and NAD+ supplements.'
    },
    'neuroplasticity': {
      name: 'Neuroplasticity',
      tech: 'The brain\u2019s capacity to reorganize synaptic connections and form new pathways. HBOT promotes it via oxygenation, angiogenesis, and microglial suppression.',
      plain: 'Your brain\u2019s ability to rewire itself. HBOT supports this with more oxygen, new blood vessels, and reduced neuroinflammation.'
    },
    'henrys-law': {
      name: 'Henry\u2019s Law',
      tech: 'At constant temperature, dissolved gas concentration is proportional to its partial pressure (C = k\u2095 \u00b7 P). The physics underlying all of HBOT.',
      plain: 'A physics law: more pressure above a liquid means more gas dissolves into it. This is why pressurized oxygen dissolves into your blood.'
    },
    'barotrauma': {
      name: 'Barotrauma',
      tech: 'Tissue injury from pressure differentials in gas-filled spaces. Primary HBOT risk is middle ear barotrauma. Essentially a non-issue at 1.5 ATA with gradual pressure changes.',
      plain: 'Pressure-related tissue damage, mostly affecting ears. Like airplane pressure but milder at 1.5 ATA. Equalize and pressurize slowly.'
    },
    'myopia': {
      name: 'Myopia (Temporary)',
      tech: 'Transient myopic shift from oxidative lens changes. Fully reversible within 2\u20138 weeks of cessation. Less likely at 1.5 ATA with 93% O\u2082.',
      plain: 'Temporary nearsightedness some people get during long HBOT protocols. Goes away within weeks after stopping.'
    },
    'ppo2': {
      name: 'ppO\u2082',
      tech: 'Partial pressure of oxygen (P\u209c\u2092\u209c\u2090\u2097 \u00d7 FiO\u2082). Determines dissolved O\u2082 and toxicity thresholds. Home setup at 1.5 ATA/93% \u2248 1.4 ATA ppO\u2082.',
      plain: 'How much oxygen pressure your body experiences. A home setup stays well below the danger zone at ~1.4 ppO\u2082.'
    },
    'hyperoxia': {
      name: 'Hyperoxia',
      tech: 'Elevated tissue oxygen tension above normoxia. The controlled hyperoxic state during HBOT triggers ROS signaling, NF-\u03baB suppression, and HIF-1\u03b1 activation.',
      plain: 'Having more oxygen in your tissues than normal. This controlled burst triggers your body\u2019s repair responses during HBOT.'
    },
    'normoxia': {
      name: 'Normoxia',
      tech: 'Normal physiological oxygen tension. Return to normoxia after HBOT creates relative hypoxia that triggers HIF-1\u03b1 stabilization\u2014the hyperoxic-hypoxic paradox.',
      plain: 'Normal oxygen levels. The drop back to normoxia after each session triggers your body to build more oxygen infrastructure.'
    },
    'capillary': {
      name: 'Capillaries',
      tech: 'Smallest blood vessels (5\u201310 \u03bcm) where gas exchange occurs between blood and tissue. HBOT promotes capillary growth via VEGF-driven angiogenesis.',
      plain: 'The tiniest blood vessels where oxygen passes from blood into tissue. HBOT grows new ones, permanently improving circulation.'
    },
    'cytokines': {
      name: 'Cytokines',
      tech: 'Small signaling proteins mediating immune and inflammatory responses. Includes pro-inflammatory (TNF-\u03b1, IL-6) and anti-inflammatory types. HBOT shifts the balance toward anti-inflammatory.',
      plain: 'Signaling molecules controlling inflammation and immune responses. HBOT shifts the balance away from inflammatory cytokines.'
    },
    'macrophage': {
      name: 'Macrophages',
      tech: 'Innate immune cells with M1 (pro-inflammatory) and M2 (tissue-repairing) polarization states. HBOT promotes M1\u2192M2 polarization shift.',
      plain: 'Immune cells that can either promote inflammation or repair tissue. HBOT shifts them toward repair mode.'
    },
    'erythropoiesis': {
      name: 'Erythropoiesis',
      tech: 'Production of red blood cells in bone marrow, stimulated by EPO downstream of HIF-1\u03b1 activation. HBOT drives it via hyperoxia\u2013normoxia cycling.',
      plain: 'Your body\u2019s process of making new red blood cells. HBOT stimulates this through the HIF-1\u03b1 pathway between sessions.'
    },
    'eustachian': {
      name: 'Eustachian Tube',
      tech: 'Tube connecting middle ear to nasopharynx for pressure equalization. Dysfunction during pressurization is the primary cause of HBOT-related ear barotrauma.',
      plain: 'The tube connecting your middle ear to your throat. Learning to open it (swallow, yawn, pinch-and-blow) prevents ear pain during pressurization.'
    },
    'edema': {
      name: 'Edema',
      tech: 'Excess fluid accumulation in interstitial spaces. HBOT reduces edema via hyperoxic vasoconstriction while maintaining elevated tissue oxygenation.',
      plain: 'Swelling from excess fluid in tissues. HBOT helps reduce it by constricting blood vessels while still delivering more oxygen.'
    },
    'ischemia': {
      name: 'Ischemia',
      tech: 'Insufficient blood supply to tissue causing oxygen deprivation. Plasma-dissolved O\u2082 from HBOT can reach ischemic tissue independent of hemoglobin transport.',
      plain: 'When tissue doesn\u2019t get enough blood and oxygen. HBOT\u2019s dissolved oxygen can reach these starved areas through surrounding fluid.'
    },
    'mitochondria': {
      name: 'Mitochondria',
      tech: 'Organelles generating ATP via oxidative phosphorylation. HBOT supports mitochondrial function through increased O\u2082 availability and sirtuin-mediated biogenesis.',
      plain: 'Your cells\u2019 power plants, turning oxygen into energy. HBOT gives them more fuel and stimulates your body to build more.'
    },
    'senolytic': {
      name: 'Senolytic',
      tech: 'Agent that selectively induces apoptosis in senescent cells. HBOT achieves senolytic-like clearance via immune-mediated mechanisms rather than pharmacological intervention.',
      plain: 'Anything that clears out zombie (senescent) cells. HBOT achieves this through immune system activation rather than drugs.'
    },
    'tonic-clonic': {
      name: 'Tonic-Clonic Seizure',
      tech: 'Generalized seizure with tonic (sustained contraction) and clonic (rhythmic jerking) phases. The type associated with oxygen toxicity\u2014self-limiting when O\u2082 is removed.',
      plain: 'A seizure with muscle stiffening and jerking. The type that can happen from too much oxygen\u2014stops when the oxygen is removed.'
    },
    'pneumothorax': {
      name: 'Pneumothorax',
      tech: 'Air in the pleural space causing lung collapse. Pressurization can convert simple to tension pneumothorax\u2014an absolute HBOT contraindication.',
      plain: 'A collapsed lung. Pressure changes in an HBOT chamber can make it much worse\u2014must be treated before starting HBOT.'
    }
  };

  var activeTerm = null;

  function show(link) {
    close();
    var href = link.getAttribute('href');
    var id = href.split('#')[1];
    var t = T[id];
    if (!t) { window.location = href; return; }

    activeTerm = link;
    link.setAttribute('aria-expanded', 'true');

    var isTech = document.body.classList.contains('mode-technical');
    var pop = document.createElement('div');
    pop.className = 'term-popover';
    pop.setAttribute('role', 'tooltip');
    pop.innerHTML =
      '<div class="term-popover-title">' + t.name + '</div>' +
      '<div class="term-popover-body">' + (isTech ? t.tech : t.plain) + '</div>' +
      '<a class="term-popover-link" href="' + href + '">Glossary \u2192</a>';

    var arrow = document.createElement('div');
    arrow.className = 'term-popover-arrow';
    pop.appendChild(arrow);
    document.body.appendChild(pop);

    var r = link.getBoundingClientRect();
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var sy = window.pageYOffset, sx = window.pageXOffset;
    var vw = window.innerWidth;
    var above = r.top > ph + 12;

    pop.style.top = (above ? r.top + sy - ph - 10 : r.bottom + sy + 10) + 'px';
    var left = r.left + sx + r.width / 2 - pw / 2;
    left = Math.max(sx + 12, Math.min(left, sx + vw - pw - 12));
    pop.style.left = left + 'px';

    arrow.className = 'term-popover-arrow ' + (above ? 'above' : 'below');
    var al = r.left + sx + r.width / 2 - left - 5;
    arrow.style.left = Math.max(14, Math.min(al, pw - 24)) + 'px';
  }

  function close() {
    var p = document.querySelector('.term-popover');
    if (p) p.remove();
    if (activeTerm) {
      activeTerm.removeAttribute('aria-expanded');
      activeTerm = null;
    }
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a.term');
    if (link) { e.preventDefault(); show(link); return; }
    if (!e.target.closest('.term-popover')) close();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key === ' ') {
      var link = e.target.closest('a.term');
      if (link) { e.preventDefault(); show(link); }
    }
  });

  // Close popover on tech/plain mode toggle
  new MutationObserver(close).observe(document.body, {
    attributes: true, attributeFilter: ['class']
  });
})();

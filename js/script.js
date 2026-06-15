/* ═══════════════════════════════════════════════════════════════
   OUR LITTLE PLACE ❤️ — JavaScript
   A romantic, lavender-themed LDR website
   
   🔧 EASY EDIT ZONE: Modify the CONFIG section below to 
   personalize dates, messages, and milestones.
   ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
//  📝 CONFIGURATION — Edit these to personalize your website!
// ─────────────────────────────────────────────────────────────

const CONFIG = {
    // When did your relationship officially start? (YYYY-MM-DD)
    relationshipStart: '2026-06-09',

    // When are you meeting next? (YYYY-MM-DD)
    nextMeeting: '2027-03-01',

    // Timezone identifiers
    timezone1: 'Asia/Manila',       // Cyrus's timezone
    timezone2: 'America/Los_Angeles', // Lyka's timezone

    // Distance between locations
    distanceMiles: '7,283',
    distanceKm: '11,724',
};

// ─────────────────────────────────────────────────────────────
//  💫 MILESTONES — Add, edit, or remove milestones here
// ─────────────────────────────────────────────────────────────

const MILESTONES = [
    {
        date: '2025-12-25',
        icon: '💫',
        title: 'The Day We Met',
        description: 'Our beautiful story began on Christmas Day'
    },
    {
        date: '2026-05-07',
        icon: '💋',
        title: 'Our First Kiss',
        description: 'The moment my heart skipped a beat'
    },
    {
        date: '2026-05-27',
        icon: '🔥',
        title: 'Our First French Kiss',
        description: 'A deeper kind of love'
    },
    {
        date: '2026-06-09',
        icon: '💜',
        title: 'She Answered My Ligaw',
        description: 'You became my person — officially ours'
    },
    {
        date: '2026-06-13',
        icon: '💕',
        title: 'First "I Love You"',
        description: 'Three words that changed everything'
    },
    {
        date: '2026-06-13',
        icon: '✈️',
        title: 'She Flew',
        description: 'The distance began, but so did forever'
    },
];

// ─────────────────────────────────────────────────────────────
//  💌 OPEN WHEN LETTERS — Edit messages and details here
// ─────────────────────────────────────────────────────────────

const OPEN_WHEN_CARDS = [
    {
        id: 'miss-me',
        icon: '💌',
        title: 'Open When You Miss Me',
        hint: 'When the distance feels too heavy...',
        emoji: '🥺',
        hasAudio: true,
        audioFile: 'audio/miss-me.m4a',  // Add your audio file here
        message: `Hey love 🥺

I miss you too.

Hindi mo kailangang pigilan yung pag-miss mo sakin, normal yan. Pero sana habang nami-miss mo ako, maramdaman mo rin na andito lang ako—hindi nawawala, hindi nagbabago.

Pumikit ka sandali. Imagine mo lang, nandiyan lang ako, tahimik na kasama ka.

Mahal kita. Always.`
    },
    {
        id: 'sad',
        icon: '💌',
        title: 'Open When You\'re Sad',
        hint: 'Let me hold your heart...',
        emoji: '💔',
        hasAudio: true,
        audioFile: 'audio/sad.m4a',  // Add your audio file here
        message: `Hey love…

Okay lang umiyak. Okay lang maging sad.

Hindi mo kailangan maging strong lagi.

Kung mabigat ngayon, hindi ibig sabihin mag-isa ka. Nandito ako, nakikinig kahit hindi mo masabi lahat.

Take your time. Hinga ka lang.

Andito lang ako.`
    },
    {
        id: 'stressed',
        icon: '💌',
        title: 'Open When You\'re Stressed',
        hint: 'Take a breath with me...',
        emoji: '🌧',
        hasAudio: true,
        audioFile: 'audio/stressed.m4a',  // Add your audio file here
        message: `Hey love 🫶

Ang dami mong iniisip ngayon, no?

Pero sandali lang—hindi mo kailangang sabay-sabay ayusin lahat.

Isa-isa lang. Hinga muna.

Proud ako sayo kahit pagod ka. Kahit naguguluhan ka. Kasi tuloy ka pa rin.

Nandito lang ako, okay?`
    },
    {
        id: 'cant-sleep',
        icon: '💌',
        title: "Open When You Can't Sleep",
        hint: 'Let me be your lullaby...',
        emoji: '🌙',
        hasAudio: true,
        audioFile: 'audio/sleep.m4a',
        message: `Hey love 🌙

Kung hindi ka makatulog, hindi mo kailangang pilitin.

Relax ka lang.

Imagine mo tahimik lang, safe ka, walang pressure.

Kung gusto mo, isipin mo lang na nandito ako, tahimik lang sa tabi mo hanggang makatulog ka.

Goodnight, love. I’m here.`
    }
];

// ─────────────────────────────────────────────────────────────
//  🎙️ HEAR MY VOICE — Audio recordings list
// ─────────────────────────────────────────────────────────────

const VOICE_RECORDINGS = [
    {
        id: 'good-morning',
        emoji: '🌅',
        title: 'Good Morning',
        description: 'Start your day hearing how much I love you',
        duration: '0:45',
        audioFile: 'audio/good-morning.m4a'  // Add your audio file
    },
    {
        id: 'i-miss-you',
        emoji: '💭',
        title: 'I Miss You',
        description: 'For when you feel far away from me',
        duration: '1:20',
        audioFile: 'audio/i-miss-you.m4a'
    },
    {
        id: 'good-night',
        emoji: '🌙',
        title: 'Good Night',
        description: 'Let my voice be the last thing you hear',
        duration: '1:00',
        audioFile: 'audio/good-night.m4a'
    },
    {
        id: 'i-love-you',
        emoji: '💜',
        title: 'I Love You',
        description: 'Three words that mean everything',
        duration: '0:30',
        audioFile: 'audio/i-love-you.m4a'
    },

    {
        id: 'random',
        emoji: '🎲',
        title: 'Random Sound',
        description: 'A surprise sound just because I love you',
        duration: '0:30',
        audioFile: 'audio/random.m4a'
    }
];




// ═══════════════════════════════════════════════════════════════
//  🚀 APPLICATION CODE — You probably don't need to edit below
// ═══════════════════════════════════════════════════════════════

// ─── DOM References ───
const loadingScreen = document.getElementById('loading-screen');
const homeSection = document.getElementById('home');
const mainApp = document.getElementById('main-app');
const enterBtn = document.getElementById('enter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const navHomeBtn = document.getElementById('nav-home-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const backToTopBtn = document.getElementById('back-to-top');
const floatingHearts = document.getElementById('floating-hearts');

// ─── Audio State ───
let currentAudio = null;
let currentAudioSource = null; // 'voice' or 'modal'
let currentAudioId = null; // id of recording or card
let activeModalCard = null; // currently opened card in modal

// Unified function to stop all playing audio and reset UI components
function stopAllAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // Reset all voice buttons and waves
    document.querySelectorAll('.voice-play-btn').forEach(btn => {
        btn.classList.remove('playing');
        const icon = btn.querySelector('.play-icon');
        if (icon) icon.textContent = '▶';
    });
    document.querySelectorAll('.voice-wave').forEach(wave => {
        wave.classList.remove('playing');
    });

    // Reset modal play button and wave
    const modalPlayBtn = document.getElementById('modal-audio-play');
    if (modalPlayBtn) {
        const icon = modalPlayBtn.querySelector('.play-icon');
        if (icon) icon.textContent = '▶';
    }
    const modalWave = document.getElementById('modal-audio-wave');
    if (modalWave) {
        modalWave.classList.remove('playing');
    }

    currentAudioSource = null;
    currentAudioId = null;
}

// ─────────────────────────────────────────────────────────────
//  LOADING SCREEN
// ─────────────────────────────────────────────────────────────

window.addEventListener('load', () => {
    // Create hero stars
    createHeroStars();

    // Hide loading screen after animation completes
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2500);

    // Start floating hearts
    startFloatingHearts();

    // Initialize scroll animations
    initScrollAnimations();
});

// ─────────────────────────────────────────────────────────────
//  HERO STARS — Twinkling starfield on home page
// ─────────────────────────────────────────────────────────────

function createHeroStars() {
    const starsContainer = document.querySelector('.hero-stars');
    if (!starsContainer) return;

    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'hero-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        star.style.animationDelay = Math.random() * 5 + 's';

        // Vary star sizes
        const size = 1 + Math.random() * 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        starsContainer.appendChild(star);
    }
}

// ─────────────────────────────────────────────────────────────
//  FLOATING HEARTS — Ambient floating heart animation
// ─────────────────────────────────────────────────────────────

function startFloatingHearts() {
    const hearts = ['💜', '💕', '🤍', '💗', '💝', '🩷', '🩵'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
        heart.style.animationDuration = (8 + Math.random() * 12) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';

        floatingHearts.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 22000);
    }

    // Create hearts periodically
    setInterval(createHeart, 3000);

    // Start with a few hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 600);
    }
}

// ─────────────────────────────────────────────────────────────
//  NAVIGATION — Enter world & page switching
// ─────────────────────────────────────────────────────────────

// "Enter Our World" button
enterBtn.addEventListener('click', () => {
    // Fade out home section
    homeSection.style.opacity = '0';
    homeSection.style.transform = 'scale(0.95)';
    homeSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

    setTimeout(() => {
        homeSection.classList.add('hidden');
        mainApp.classList.remove('hidden');
        mainApp.style.opacity = '0';
        mainApp.style.transform = 'translateY(20px)';

        requestAnimationFrame(() => {
            mainApp.style.transition = 'all 0.6s ease-out';
            mainApp.style.opacity = '1';
            mainApp.style.transform = 'translateY(0)';
        });

        // Animate page transitions when entering app
        initDashboard();
        renderOpenWhenCards();
        renderVoiceCards();
        triggerScrollAnimations();
    }, 800);
});

// Home button — go back to landing
navHomeBtn.addEventListener('click', () => {
    mainApp.classList.add('hidden');
    homeSection.classList.remove('hidden');
    homeSection.style.opacity = '1';
    homeSection.style.transform = 'scale(1)';
});

// Nav link switching
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.dataset.page;

        // Update nav active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Switch pages
        document.querySelectorAll('.app-page').forEach(page => {
            page.classList.remove('active');
        });

        const target = document.getElementById(targetPage);
        if (target) {
            target.classList.add('active');
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Re-trigger scroll animations
            setTimeout(triggerScrollAnimations, 100);
        }
    });
});

// ─────────────────────────────────────────────────────────────
//  DASHBOARD — Counters, Clocks, Timeline
// ─────────────────────────────────────────────────────────────

// Helper to parse YYYY-MM-DD date in local timezone to avoid UTC shift issues
function parseLocalDate(dateStr) {
    const parts = dateStr.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function initDashboard() {
    updateDaysTogether();
    updateCountdown();
    updateClocks();
    renderMilestones();

    // Update clocks and countdown every second
    setInterval(() => {
        updateCountdown();
        updateClocks();
    }, 1000);
}

// Days Together Counter
function updateDaysTogether() {
    const start = parseLocalDate(CONFIG.relationshipStart);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const daysEl = document.getElementById('days-together');
    const detailEl = document.getElementById('days-detail');

    // Animate counter
    animateCounter(daysEl, diffDays);

    // Calculate months and years
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;

    let detailText = '';
    if (years > 0) detailText += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) detailText += `${months} month${months > 1 ? 's' : ''}, `;
    detailText += `${days} day${days > 1 ? 's' : ''} of love 💕`;

    detailEl.textContent = detailText;
}

// Animated number counter
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 60));
    const duration = 2000;
    const stepTime = duration / (target / increment);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, stepTime);
}

// Meeting Countdown
function updateCountdown() {
    const meeting = parseLocalDate(CONFIG.nextMeeting);
    const now = new Date();
    const diff = meeting - now;

    if (diff <= 0) {
        document.getElementById('countdown-days').textContent = '🎉';
        document.getElementById('countdown-hours').textContent = 'IT\'S';
        document.getElementById('countdown-minutes').textContent = 'TIME!';
        document.getElementById('countdown-seconds').textContent = '💜';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
}

// Live Clocks
function updateClocks() {
    const now = new Date();

    // Philippines time
    const phOptions = {
        timeZone: CONFIG.timezone1,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const phDateOptions = {
        timeZone: CONFIG.timezone1,
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    document.getElementById('time-ph').textContent = now.toLocaleTimeString('en-US', phOptions);
    document.getElementById('date-ph').textContent = now.toLocaleDateString('en-US', phDateOptions);

    // Determine time period for PH
    const phHour = parseInt(now.toLocaleTimeString('en-US', { timeZone: CONFIG.timezone1, hour: 'numeric', hour12: false }));
    document.getElementById('period-ph').textContent = getTimePeriod(phHour);

    // California time
    const caOptions = {
        timeZone: CONFIG.timezone2,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const caDateOptions = {
        timeZone: CONFIG.timezone2,
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    document.getElementById('time-ca').textContent = now.toLocaleTimeString('en-US', caOptions);
    document.getElementById('date-ca').textContent = now.toLocaleDateString('en-US', caDateOptions);

    // Determine time period for CA
    const caHour = parseInt(now.toLocaleTimeString('en-US', { timeZone: CONFIG.timezone2, hour: 'numeric', hour12: false }));
    document.getElementById('period-ca').textContent = getTimePeriod(caHour);
}

function getTimePeriod(hour) {
    if (hour >= 5 && hour < 12) return '🌅 Good Morning';
    if (hour >= 12 && hour < 17) return '☀️ Good Afternoon';
    if (hour >= 17 && hour < 21) return '🌇 Good Evening';
    return '🌙 Good Night';
}

// ─────────────────────────────────────────────────────────────
//  MILESTONES TIMELINE
// ─────────────────────────────────────────────────────────────

function renderMilestones() {
    const timeline = document.getElementById('timeline');
    const now = new Date();

    timeline.innerHTML = MILESTONES.map((milestone, index) => {
        const milestoneDate = parseLocalDate(milestone.date);
        const isFuture = milestoneDate > now;
        const formattedDate = milestoneDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        return `
            <div class="timeline-item ${isFuture ? 'future' : ''}" style="animation-delay: ${index * 0.15}s">
                <div class="timeline-dot">${milestone.icon}</div>
                <div class="timeline-card">
                    <div class="timeline-date">${formattedDate}</div>
                    <div class="timeline-title">${milestone.title}</div>
                    <div class="timeline-desc">${milestone.description}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ─────────────────────────────────────────────────────────────
//  OPEN WHEN — Card Grid & Modal
// ─────────────────────────────────────────────────────────────

function renderOpenWhenCards() {
    const grid = document.getElementById('open-when-grid');

    grid.innerHTML = OPEN_WHEN_CARDS.map((card, index) => `
        <div class="ow-card glass-card animate-on-scroll" 
             data-card-index="${index}" 
             style="animation-delay: ${index * 0.1}s"
             role="button"
             tabindex="0"
             aria-label="Open letter: ${card.title}">
            <div class="ow-icon">${card.icon}</div>
            <div class="ow-title">${card.title}</div>
            <div class="ow-hint">${card.hint}</div>
            <div class="ow-seal">
                <span>✉️</span> Tap to open
            </div>
        </div>
    `).join('');

    // Add click listeners
    grid.querySelectorAll('.ow-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.cardIndex);
            openLetterModal(OPEN_WHEN_CARDS[index]);
        });

        // Keyboard enter support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function openLetterModal(card) {
    activeModalCard = card; // Set global reference to the open card
    
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalAudioSection = document.getElementById('modal-audio-section');

    modalIcon.textContent = card.emoji;
    modalTitle.textContent = card.title;
    modalMessage.innerHTML = card.message.replace(/\n/g, '<br>');

    // Show/hide audio section
    if (card.hasAudio && card.audioFile) {
        modalAudioSection.style.display = 'block';
    } else {
        modalAudioSection.style.display = 'none';
    }

    // Open modal
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // If modal audio is currently playing, stop it
    if (currentAudioSource === 'modal') {
        stopAllAudio();
    }
    
    activeModalCard = null;
}

// Modal close handlers
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Modal audio play button (real audio functionality)
document.getElementById('modal-audio-play').addEventListener('click', function () {
    if (!activeModalCard || !activeModalCard.audioFile) return;

    const wave = document.getElementById('modal-audio-wave');
    const icon = this.querySelector('.play-icon');

    // If this specific modal audio is already playing, pause it (which resets UI)
    if (currentAudioSource === 'modal' && currentAudioId === activeModalCard.id) {
        stopAllAudio();
        return;
    }

    // Stop whatever audio is currently playing
    stopAllAudio();

    // Instantiate and play new audio
    const audio = new Audio(activeModalCard.audioFile);
    currentAudio = audio;
    currentAudioSource = 'modal';
    currentAudioId = activeModalCard.id;

    wave.classList.add('playing');
    icon.textContent = '⏸';

    audio.addEventListener('ended', () => {
        stopAllAudio();
    });

    audio.addEventListener('pause', () => {
        wave.classList.remove('playing');
        icon.textContent = '▶';
    });

    audio.addEventListener('error', (e) => {
        console.error("Audio playback error:", e);
        stopAllAudio();
        alert("Sorry, could not play this audio file. Please check if the file exists.");
    });

    audio.play().catch(err => {
        console.error("Playback failed:", err);
        stopAllAudio();
    });
});

// ─────────────────────────────────────────────────────────────
//  HEAR MY VOICE — Audio Cards
// ─────────────────────────────────────────────────────────────

function renderVoiceCards() {
    const grid = document.getElementById('voice-grid');

    grid.innerHTML = VOICE_RECORDINGS.map((recording, index) => {
        // Generate random wave bar heights for visual variety
        const waveBars = Array.from({ length: 15 }, () =>
            `<span style="height: ${4 + Math.random() * 18}px"></span>`
        ).join('');

        return `
            <div class="voice-card glass-card animate-on-scroll" 
                 style="animation-delay: ${index * 0.12}s"
                 data-voice-index="${index}">
                <div class="voice-emoji">${recording.emoji}</div>
                <div class="voice-title">${recording.title}</div>
                <div class="voice-desc">${recording.description}</div>
                <div class="voice-player">
                    <button class="voice-play-btn" 
                            data-voice-id="${recording.id}" 
                            aria-label="Play ${recording.title}">
                        <span class="play-icon">▶</span>
                    </button>
                    <div class="voice-wave" id="wave-${recording.id}">
                        ${waveBars}
                    </div>
                    <span class="voice-duration" id="duration-${recording.id}">${recording.duration}</span>
                </div>
            </div>
        `;
    }).join('');

    // Add play button listeners
    grid.querySelectorAll('.voice-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleVoicePlay(btn);
        });
    });

    // Dynamically retrieve and update each recording's duration
    updateVoiceCardDurations();
}

function updateVoiceCardDurations() {
    VOICE_RECORDINGS.forEach(recording => {
        if (!recording.audioFile) return;
        const tempAudio = new Audio(recording.audioFile);
        tempAudio.addEventListener('loadedmetadata', () => {
            if (tempAudio.duration && !isNaN(tempAudio.duration)) {
                const minutes = Math.floor(tempAudio.duration / 60);
                const seconds = Math.floor(tempAudio.duration % 60);
                const formattedDuration = `${minutes}:${String(seconds).padStart(2, '0')}`;
                
                // Update object config
                recording.duration = formattedDuration;
                
                // Update UI element
                const durationEl = document.getElementById(`duration-${recording.id}`);
                if (durationEl) {
                    durationEl.textContent = formattedDuration;
                }
            }
        });
        tempAudio.load();
    });
}

function toggleVoicePlay(btn) {
    const voiceId = btn.dataset.voiceId;
    const wave = document.getElementById(`wave-${voiceId}`);
    const icon = btn.querySelector('.play-icon');

    // If this specific recording is already playing, pause it (which resets UI)
    if (currentAudioSource === 'voice' && currentAudioId === voiceId) {
        stopAllAudio();
        return;
    }

    // Stop whatever audio is currently playing
    stopAllAudio();

    const recording = VOICE_RECORDINGS.find(r => r.id === voiceId);
    if (!recording || !recording.audioFile) return;

    // Instantiate and play new audio
    const audio = new Audio(recording.audioFile);
    currentAudio = audio;
    currentAudioSource = 'voice';
    currentAudioId = voiceId;

    btn.classList.add('playing');
    wave.classList.add('playing');
    icon.textContent = '⏸';

    audio.addEventListener('ended', () => {
        stopAllAudio();
    });

    audio.addEventListener('pause', () => {
        btn.classList.remove('playing');
        wave.classList.remove('playing');
        icon.textContent = '▶';
    });

    audio.addEventListener('error', (e) => {
        console.error("Audio playback error:", e);
        stopAllAudio();
        alert("Sorry, could not play this audio file. Please check if the file exists.");
    });

    audio.play().catch(err => {
        console.error("Playback failed:", err);
        stopAllAudio();
    });
}



// ─────────────────────────────────────────────────────────────
//  SCROLL ANIMATIONS — Intersection Observer
// ─────────────────────────────────────────────────────────────

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function triggerScrollAnimations() {
    // Re-observe dynamically added elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
        observer.observe(el);
    });

    // Force-show elements already in view
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
}

// ─────────────────────────────────────────────────────────────
//  BACK TO TOP BUTTON
// ─────────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Nav scroll effect
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 30);
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─────────────────────────────────────────────────────────────
//  UTILITY — Debounce (for future use)
// ─────────────────────────────────────────────────────────────

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ─────────────────────────────────────────────────────────────
//  CONSOLE EASTER EGG 💜
// ─────────────────────────────────────────────────────────────

console.log('%c💜 Our Little Place ❤️', 'font-size: 20px; font-weight: bold; color: #B8A9E8;');
console.log('%cBuilt with love by Cyrus for Princess Lyka', 'font-size: 12px; color: #F2B5D4;');
console.log('%c7,283 miles apart, but our hearts beat as one.', 'font-size: 11px; color: #9B8AD4; font-style: italic;');

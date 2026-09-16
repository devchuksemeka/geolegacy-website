export type SceneVariant = "land" | "water" | "ground" | "signal";

function LandScene() {
  return (
    <g>
      <defs>
        <linearGradient id="s-land-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="s-land-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <rect y="0" width="400" height="120" fill="url(#s-land-sky)" />
      <circle cx="330" cy="46" r="26" fill="#fff" opacity="0.1" />

      <g opacity="0.14">
        <path
          d="M0 96 Q50 82 100 94 T200 88 T300 96 T400 90 L400 120 L0 120 Z"
          fill="#fff"
        />
        <path
          d="M0 104 Q60 92 120 102 T240 96 T400 100"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
        />
      </g>

      <g opacity="0.7">
        <path
          d="M0 148 Q70 134 150 150 T300 142 T400 150"
          stroke="#eaf0ff"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M0 172 Q90 156 190 174 T400 168"
          stroke="#eaf0ff"
          strokeWidth="1.1"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M0 200 Q100 186 200 202 T400 196"
          stroke="#eaf0ff"
          strokeWidth="1"
          opacity="0.42"
          fill="none"
        />
        <path
          d="M0 232 Q80 220 160 234 T400 228"
          stroke="#eaf0ff"
          strokeWidth="0.9"
          opacity="0.28"
          fill="none"
        />
      </g>

      <path
        d="M0 148 L0 260 L110 260 L110 150 Z"
        fill="url(#s-land-ground)"
      />

      <circle cx="52" cy="196" r="3.2" fill="#fff" opacity="0.85" />
      <line x1="52" y1="196" x2="52" y2="158" stroke="#fff" strokeWidth="1.4" opacity="0.7" />
      <line x1="52" y1="160" x2="78" y2="152" stroke="#fff" strokeWidth="1.4" opacity="0.7" />
      <line x1="52" y1="178" x2="30" y2="172" stroke="#fff" strokeWidth="1" opacity="0.45" />

      <g opacity="0.9">
        <line x1="200" y1="150" x2="178" y2="222" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="200" y1="150" x2="216" y2="224" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="200" y1="150" x2="200" y2="238" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="182" y="136" width="36" height="24" rx="4" fill="#101d55" stroke="#eaf0ff" strokeWidth="1.2" />
        <circle cx="208" cy="148" r="3" fill="#eaf0ff" />
        <line x1="182" y1="148" x2="168" y2="148" stroke="#eaf0ff" strokeWidth="0.9" opacity="0.6" />
      </g>

      <g opacity="0.85">
        <line x1="286" y1="150" x2="286" y2="228" stroke="#fff" strokeWidth="1.6" />
        <rect x="274" y="136" width="24" height="20" rx="3" fill="#16296b" stroke="#eaf0ff" strokeWidth="1.1" />
        <circle cx="286" cy="146" r="3.4" fill="#eaf0ff" />
        <line x1="286" y1="156" x2="286" y2="170" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.55" />
      </g>

      <line x1="208" y1="148" x2="286" y2="146" stroke="#fff" strokeWidth="0.9" strokeDasharray="3 4" opacity="0.5" />

      <g fontFamily="var(--font-space-grotesk), 'Space Grotesk'" fontSize="9" fill="#eaf0ff">
        <text x="16" y="246" opacity="0.6">06°27&apos;N 03°24&apos;E</text>
        <text x="240" y="130" opacity="0.75">DH 3.42 m</text>
      </g>
    </g>
  );
}

function WaterScene() {
  return (
    <g>
      <defs>
        <linearGradient id="s-water-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="s-water-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <rect y="0" width="400" height="96" fill="url(#s-water-sky)" />
      <circle cx="320" cy="34" r="22" fill="#fff" opacity="0.09" />

      <g stroke="#eaf0ff" fill="none" strokeWidth="1.2">
        <path d="M0 72 Q60 62 120 70 T240 64 T400 70" opacity="0.4" />
        <path d="M0 88 Q70 78 140 86 T280 80 T400 86" opacity="0.28" />
      </g>

      <g>
        <circle cx="330" cy="214" r="14" fill="none" stroke="#eaf0ff" strokeWidth="0.9" opacity="0.5" />
        <path d="M330 214 L250 216 M330 214 L260 206 M330 214 L278 224" stroke="#fff" strokeWidth="1" strokeDasharray="2 4" opacity="0.55" />
        <circle cx="330" cy="214" r="3.4" fill="#fff" opacity="0.75" />
      </g>

      <g>
        <path d="M88 72 L118 72 L128 84 L182 84 L192 70 L258 62 L258 96 L70 96 L88 72 Z" fill="#0b1740" stroke="#eaf0ff" strokeWidth="1.1" />
        <rect x="120" y="40" width="34" height="22" rx="3" fill="#16296b" stroke="#eaf0ff" strokeWidth="1" />
        <line x1="258" y1="70" x2="258" y2="120" stroke="#eaf0ff" strokeWidth="2" />
        <rect x="250" y="120" width="16" height="8" rx="2" fill="#16296b" stroke="#eaf0ff" strokeWidth="0.8" />
        <path d="M258 128 L236 158 M258 128 L284 158" stroke="#fff" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
      </g>

      <g stroke="#eaf0ff" fill="none">
        <path d="M0 150 Q90 142 190 152 T400 148" strokeWidth="1" opacity="0.5" />
        <path d="M0 172 Q100 164 220 174 T400 170" strokeWidth="1" opacity="0.38" />
        <path d="M0 198 Q80 190 180 200 T400 194" strokeWidth="0.9" opacity="0.26" />
      </g>

      <path d="M0 96 L400 96 L400 260 L0 260 Z" fill="url(#s-water-sea)" />
      <path d="M0 212 Q110 204 240 214 T400 208 L400 260 L0 260 Z" fill="#0b1740" opacity="0.55" />

      <g stroke="#eaf0ff" strokeWidth="0.8" opacity="0.35">
        <line x1="60" y1="96" x2="60" y2="260" />
        <line x1="180" y1="96" x2="180" y2="260" />
        <line x1="300" y1="96" x2="300" y2="260" />
      </g>

      <g fontFamily="var(--font-space-grotesk), 'Space Grotesk'" fontSize="9" fill="#eaf0ff">
        <text x="16" y="246" opacity="0.6">SINGLEBEAM SOUNDING</text>
        <text x="214" y="238" opacity="0.8">-18.4 m</text>
      </g>
    </g>
  );
}

function GroundScene() {
  return (
    <g>
      <defs>
        <linearGradient id="s-ground-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="s-ground-log" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b1740" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0b1740" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <rect y="0" width="400" height="120" fill="url(#s-ground-sky)" />

      <g opacity="0.28">
        <path d="M0 118 Q90 108 180 120 T400 114" stroke="#eaf0ff" strokeWidth="1.2" fill="none" />
        <path d="M0 142 Q100 130 200 144 T400 138" stroke="#eaf0ff" strokeWidth="1" opacity="0.5" fill="none" />
        <path d="M0 170 Q80 158 180 172 T400 166" stroke="#eaf0ff" strokeWidth="0.9" opacity="0.36" fill="none" />
      </g>

      <g opacity="0.9">
        <rect x="96" y="70" width="14" height="120" fill="#0b1740" stroke="#eaf0ff" strokeWidth="1.1" />
        <path d="M110 70 L120 78 L120 190 L110 190 Z" fill="#16296b" stroke="#eaf0ff" strokeWidth="0.8" />
        <rect x="88" y="64" width="30" height="8" rx="2" fill="#16296b" stroke="#eaf0ff" strokeWidth="0.9" />
        <line x1="103" y1="120" x2="103" y2="26" stroke="#eaf0ff" strokeWidth="1.4" />
        <rect x="96" y="20" width="14" height="12" rx="2" fill="#101d55" stroke="#eaf0ff" strokeWidth="0.9" />
        <line x1="103" y1="26" x2="103" y2="20" stroke="#eaf0ff" strokeWidth="1" opacity="0.6" />
        <line x1="103" y1="20" x2="103" y2="8" stroke="#fff" strokeWidth="1.6" />
        <line x1="103" y1="8" x2="124" y2="2" stroke="#fff" strokeWidth="1.2" />
      </g>

      <g>
        <rect x="232" y="150" width="130" height="110" rx="4" fill="url(#s-ground-log)" />
        <g opacity="0.75">
          <rect x="244" y="158" width="28" height="16" fill="#eaf0ff" />
          <rect x="244" y="174" width="28" height="12" fill="#9db8ff" />
          <rect x="244" y="186" width="28" height="18" fill="#c9d4ff" />
          <rect x="244" y="204" width="28" height="10" fill="#6fa1ff" />
          <rect x="244" y="214" width="28" height="20" fill="#9db8ff" />
          <rect x="244" y="234" width="28" height="16" fill="#3f6fe0" />
        </g>
        <g stroke="#eaf0ff" strokeWidth="0.7" opacity="0.4">
          <line x1="280" y1="150" x2="280" y2="260" />
          <line x1="318" y1="150" x2="318" y2="260" />
          <line x1="356" y1="150" x2="356" y2="260" />
        </g>
        <g stroke="#eaf0ff" strokeWidth="0.6" opacity="0.4">
          <line x1="232" y1="170" x2="362" y2="170" />
          <line x1="232" y1="196" x2="362" y2="196" />
          <line x1="232" y1="224" x2="362" y2="224" />
        </g>
        <g fontFamily="var(--font-space-grotesk), 'Space Grotesk'" fontSize="8.5" fill="#eaf0ff">
          <text x="288" y="168" opacity="0.85">0.0</text>
          <text x="288" y="194" opacity="0.85">5.0</text>
          <text x="288" y="222" opacity="0.85">10.0</text>
          <text x="288" y="250" opacity="0.85">15.0</text>
        </g>
      </g>

      <rect x="0" y="190" width="116" height="70" fill="#0b1740" opacity="0.55" />
      <g stroke="#eaf0ff" strokeWidth="1" opacity="0.5">
        <line x1="30" y1="190" x2="30" y2="248" />
        <rect x="22" y="190" width="16" height="58" fill="#eaf0ff" opacity="0.22" />
      </g>

      <path d="M0 210 Q230 190 400 218 L400 260 L0 260 Z" fill="#0b1740" opacity="0.45" />

      <g fontFamily="var(--font-space-grotesk), 'Space Grotesk'" fontSize="9" fill="#eaf0ff">
        <text x="16" y="246" opacity="0.6">BOREHOLE BH-04</text>
        <text x="238" y="140" opacity="0.8">SPT LOG</text>
      </g>
    </g>
  );
}

function SignalScene() {
  return (
    <g>
      <defs>
        <linearGradient id="s-signal-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <rect y="0" width="400" height="120" fill="url(#s-signal-sky)" />

      <g opacity="0.6">
        <line x1="0" y1="60" x2="400" y2="60" stroke="#eaf0ff" strokeWidth="0.8" />
        <line x1="0" y1="120" x2="400" y2="120" stroke="#eaf0ff" strokeWidth="0.8" />
        <line x1="0" y1="180" x2="400" y2="180" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.7" />
        <line x1="0" y1="240" x2="400" y2="240" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.5" />
        <line x1="80" y1="0" x2="80" y2="260" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.45" />
        <line x1="200" y1="0" x2="200" y2="260" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.45" />
        <line x1="320" y1="0" x2="320" y2="260" stroke="#eaf0ff" strokeWidth="0.8" opacity="0.45" />
      </g>

      <g opacity="0.7">
        <circle cx="70" cy="52" r="3" fill="#fff" />
        <path d="M70 49 A 26 26 0 0 1 92 70" stroke="#eaf0ff" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="150" cy="30" r="3" fill="#fff" />
        <path d="M150 27 A 30 30 0 0 1 176 50" stroke="#eaf0ff" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="208" cy="56" r="3.4" fill="#fff" />
      </g>

      <g opacity="0.8">
        <path d="M208 60 A 44 44 0 0 1 170 100" stroke="#fff" strokeWidth="0.9" strokeDasharray="3 5" fill="none" />
        <path d="M204 70 A 20 20 0 0 1 178 48" stroke="#fff" strokeWidth="0.9" strokeDasharray="3 5" fill="none" opacity="0.6" />
      </g>

      <g>
        <line x1="236" y1="168" x2="214" y2="240" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="236" y1="168" x2="250" y2="242" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="236" y1="168" x2="236" y2="254" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="220" y="146" width="32" height="24" rx="4" fill="#101d55" stroke="#eaf0ff" strokeWidth="1" />
        <line x1="236" y1="150" x2="236" y2="144" stroke="#eaf0ff" strokeWidth="1.4" />
        <line x1="236" y1="144" x2="236" y2="134" stroke="#fff" strokeWidth="1.6" />
        <path d="M236 122 l10 12 -20 0 z" fill="#16296b" stroke="#eaf0ff" strokeWidth="0.9" />
      </g>

      <g stroke="#eaf0ff" fill="none" strokeWidth="0.8" opacity="0.4">
        <ellipse cx="236" cy="196" rx="60" ry="12" />
        <ellipse cx="236" cy="206" rx="96" ry="16" opacity="0.6" />
      </g>

      <g opacity="0.5">
        <rect x="40" y="178" width="64" height="82" rx="4" fill="#0b1740" opacity="0.6" stroke="#eaf0ff" strokeWidth="0.8" />
        <rect x="48" y="188" width="48" height="12" fill="#eaf0ff" opacity="0.8" />
        <rect x="48" y="206" width="48" height="8" fill="#9db8ff" opacity="0.8" />
        <rect x="48" y="220" width="48" height="8" fill="#6fa1ff" opacity="0.8" />
        <rect x="48" y="234" width="32" height="8" fill="#3f6fe0" opacity="0.8" />
      </g>

      <g fontFamily="var(--font-space-grotesk), 'Space Grotesk'" fontSize="9" fill="#eaf0ff">
        <text x="16" y="246" opacity="0.6">GNSS RTK FIX · ±0.02 m</text>
        <text x="252" y="140" opacity="0.75">ROVER</text>
      </g>
    </g>
  );
}

const SCENES: Record<SceneVariant, () => React.ReactNode> = {
  land: LandScene,
  water: WaterScene,
  ground: GroundScene,
  signal: SignalScene,
};

export default function SurveyScene({ variant }: { variant: SceneVariant }) {
  const Scene = SCENES[variant] ?? LandScene;
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Scene />
    </svg>
  );
}
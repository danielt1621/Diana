<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Birthday Reflection</title>
    <style>
        body {
            margin: 0 auto;
            padding: 0;
            min-height: 100vh;
            overflow: auto;
            font-family: 'Georgia', serif;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; /* Center vertically */
            text-align: center;
            background: #000;
            touch-action: manipulation;
            -webkit-overflow-scrolling: touch;
            max-width: 480px; /* Force phone-like layout on larger screens */
        }
        body.intro-active #content,
        body.intro-active #aurora {
            filter: blur(5px); /* Blur background when intro is active */
            pointer-events: none; /* Prevent interaction */
        }
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        #error-message {
            background: #222;
            padding: 20px;
            border-radius: 10px;
            max-width: 80%;
        }
        #aurora {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            animation: fadeIn 2s ease-in forwards;
            overflow: hidden;
            z-index: 1;
        }
        #aurora-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translate(-50%, -50%);
            object-fit: cover;
            filter: brightness(0.8); /* Subtle dim for text readability */
        }
        /* Stars for immersion (optional overlay on video) */
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite alternate;
            opacity: 0.8;
        }
        @keyframes twinkle {
            0% { opacity: 0.5; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
        }
        /* Example stars */
        .star:nth-child(1) { top: 10%; left: 20%; width: 2px; height: 2px; animation-delay: 0s; }
        .star:nth-child(2) { top: 15%; left: 50%; width: 3px; height: 3px; animation-delay: 0.5s; }
        .star:nth-child(3) { top: 20%; left: 80%; width: 1px; height: 1px; animation-delay: 1s; }
        .star:nth-child(4) { top: 25%; left: 30%; width: 2px; height: 2px; animation-delay: 1.5s; }
        .star:nth-child(5) { top: 30%; left: 60%; width: 1px; height: 1px; animation-delay: 0.2s; }
        .star:nth-child(6) { top: 35%; left: 10%; width: 3px; height: 3px; animation-delay: 0.8s; }
        .star:nth-child(7) { top: 40%; left: 70%; width: 2px; height: 2px; animation-delay: 1.2s; }
        .star:nth-child(8) { top: 45%; left: 40%; width: 1px; height: 1px; animation-delay: 0.4s; }
        .star:nth-child(9) { top: 50%; left: 90%; width: 2px; height: 2px; animation-delay: 1.0s; }
        .star:nth-child(10) { top: 55%; left: 25%; width: 3px; height: 3px; animation-delay: 0.6s; }
        .star:nth-child(11) { top: 60%; left: 55%; width: 1px; height: 1px; animation-delay: 1.4s; }
        .star:nth-child(12) { top: 65%; left: 15%; width: 2px; height: 2px; animation-delay: 0.3s; }
        .star:nth-child(13) { top: 70%; left: 85%; width: 3px; height: 3px; animation-delay: 0.9s; }
        .star:nth-child(14) { top: 75%; left: 35%; width: 1px; height: 1px; animation-delay: 1.3s; }
        .star:nth-child(15) { top: 80%; left: 65%; width: 2px; height: 2px; animation-delay: 0.7s; }
        .star:nth-child(16) { top: 85%; left: 5%; width: 3px; height: 3px; animation-delay: 1.1s; }
        .star:nth-child(17) { top: 90%; left: 45%; width: 1px; height: 1px; animation-delay: 0.1s; }
        .star:nth-child(18) { top: 95%; left: 75%; width: 2px; height: 2px; animation-delay: 1.6s; }
        .star:nth-child(19) { top: 5%; left: 95%; width: 3px; height: 3px; animation-delay: 0.0s; }
        .star:nth-child(20) { top: 8%; left: 5%; width: 1px; height: 1px; animation-delay: 1.7s; }
        .star:nth-child(21) { top: 12%; left: 35%; width: 2px; height: 2px; animation-delay: 0.4s; }
        .star:nth-child(22) { top: 18%; left: 65%; width: 3px; height: 3px; animation-delay: 1.0s; }
        .star:nth-child(23) { top: 22%; left: 15%; width: 1px; height: 1px; animation-delay: 0.6s; }
        .star:nth-child(24) { top: 28%; left: 85%; width: 2px; height: 2px; animation-delay: 1.2s; }
        .star:nth-child(25) { top: 32%; left: 25%; width: 3px; height: 3px; animation-delay: 0.8s; }
        .star:nth-child(26) { top: 38%; left: 55%; width: 1px; height: 1px; animation-delay: 1.4s; }
        .star:nth-child(27) { top: 42%; left: 95%; width: 2px; height: 2px; animation-delay: 0.2s; }
        .star:nth-child(28) { top: 48%; left: 5%; width: 3px; height: 3px; animation-delay: 0.9s; }
        .star:nth-child(29) { top: 52%; left: 45%; width: 1px; height: 1px; animation-delay: 1.5s; }
        .star:nth-child(30) { top: 58%; left: 75%; width: 2px; height: 2px; animation-delay: 0.5s; }
        /* Constellations: Simple line example (Orion-like) */
        .constellation {
            position: absolute;
            top: 30%;
            left: 40%;
            width: 100px;
            height: 100px;
        }
        .constellation::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 20px; height: 2px; background: rgba(255,255,255,0.3); transform: rotate(45deg);
        }
        .constellation::after {
            content: '';
            position: absolute;
            top: 20px; left: 30px; width: 30px; height: 2px; background: rgba(255,255,255,0.3); transform: rotate(-30deg);
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes glow { 0% { text-shadow: 0 0 5px #ffd700; } 50% { text-shadow: 0 0 15px #ffd700; } 100% { text-shadow: 0 0 5px #ffd700; } }
        @keyframes pulse { 0% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } 100% { opacity: 0.5; transform: scale(1); } } /* For reflecting text */
        #content {
            position: relative;
            z-index: 10;
            padding: 30px;
            max-width: 80%;
            opacity: 0;
            animation: fadeIn 2s ease-in 3s forwards;
            background: rgba(0,0,0,0.3);
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0,255,200,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%; /* Full width for mobile */
        }
        h1 { font-size: 2.5em; animation: glow 4s infinite; }
        p { font-size: 1.2em; font-style: italic; }
        button, input { 
            padding: 12px 24px; 
            margin: 12px; 
            border: none; 
            border-radius: 8px; 
            font-size: 1em; 
            cursor: pointer; 
            transition: transform 0.3s, box-shadow 0.3s; 
            box-shadow: 0 0 10px rgba(255,215,0,0.5);
        }
        button { background: linear-gradient(#ffd700, #ffcc00); color: #333; } 
        button:hover { transform: scale(1.05); box-shadow: 0 0 15px rgba(255,215,0,0.8); }
        .delete-btn { background: linear-gradient(#e74c3c, #c0392b); color: #fff; }
        .delete-btn:hover { box-shadow: 0 0 15px rgba(231,76,60,0.8); }
        input { background: rgba(255,255,255,0.15); color: #fff; width: 85%; border: 1px solid rgba(255,255,255,0.3); }
        .toast {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translate(-50%, -20px);
            padding: 12px 20px;
            background: rgba(10,20,30,0.85);
            border: 1px solid rgba(0,255,200,0.4);
            border-radius: 12px;
            color: #ffd700;
            box-shadow: 0 0 18px rgba(0,255,200,0.25);
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            pointer-events: none;
            z-index: 40;
            max-width: 90%;
        }
        .toast.show { opacity: 1; transform: translate(-50%, 0); }
        .toast.warn { border-color: rgba(255,215,0,0.7); color: #ffe9a6; }
        .toast.error { border-color: rgba(231,76,60,0.7); color: #ffd3c8; }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.75);
            z-index: 45;
        }
        .modal-overlay.show { display: flex; }
        .modal-card {
            background: rgba(5, 15, 25, 0.9);
            border: 1px solid rgba(0,255,200,0.3);
            border-radius: 15px;
            padding: 24px;
            max-width: 320px;
            width: 85%;
            text-align: center;
            box-shadow: 0 0 25px rgba(0,255,200,0.15);
        }
        .modal-card p { margin: 0; font-size: 1em; line-height: 1.4; }
        .modal-actions {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .modal-actions button { min-width: 110px; }
        .modal-actions .confirm-btn { background: linear-gradient(#e74c3c, #c0392b); color: #fff; }
        .modal-actions .confirm-btn:hover { box-shadow: 0 0 15px rgba(231,76,60,0.8); }
        .modal-actions .cancel-btn {
            background: rgba(255,255,255,0.15);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.35);
        }
        .modal-actions .cancel-btn:hover { box-shadow: 0 0 15px rgba(255,255,255,0.4); }
        .emoji-heart, .emoji-star {
            display: inline-block;
            margin-left: 0.2em;
        }
        .emoji-heart {
            animation: heartbeat 1.6s ease-in-out infinite;
            transform-origin: center;
            filter: drop-shadow(0 0 6px rgba(255, 64, 129, 0.45));
        }
        .emoji-star {
            animation: shimmer 2.4s ease-in-out infinite;
            filter: drop-shadow(0 0 6px rgba(255, 255, 150, 0.55));
        }
        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.18); }
            40% { transform: scale(0.94); }
            60% { transform: scale(1.12); }
            80% { transform: scale(1.02); }
        }
        @keyframes shimmer {
            0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.85; }
            30% { transform: rotate(6deg) scale(1.12); opacity: 1; }
            60% { transform: rotate(-6deg) scale(0.97); opacity: 0.92; }
        }
        #response { margin-top: 20px; font-style: italic; opacity: 0; transition: opacity 0.6s ease-in-out; text-shadow: 0 0 5px rgba(0,0,0,0.7); }
        #response.visible { opacity: 1; }
        #response.with-delay { opacity: 0; }
        #response.with-delay.show { opacity: 1; transition: opacity 0.8s ease-in-out; }
        #response.reflecting { animation: pulse 1.5s infinite; }
        #response p { margin: 0 0 1em; }
        #response p:last-child { margin-bottom: 0; }
        #stored-list { margin-top: 20px; display: none; width: 100%; background: rgba(0,0,0,0.5); /* Darker tint for readability */ padding: 15px; border-radius: 10px; }
        #stored-list ul { list-style: none; padding: 0; }
        #stored-list li { margin: 15px 0; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,255,200,0.1); }
        .row-actions { margin-top: 12px; display: flex; justify-content: flex-end; }
        /* Responsive */
        @media (max-width: 768px) { h1 { font-size: 2em; } #content { padding: 20px; } }
        #intro {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.8);
            z-index: 20;
            opacity: 1;
            transition: opacity 2s ease-in-out; /* Smoother, slower fade */
        }
        #intro.hidden { opacity: 0; pointer-events: none; }
        #intro h1 {
            font-size: 3em;
            perspective: 1000px;
            animation: flipIn 2s ease-in-out;
            text-shadow: 0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,200,0.3); /* Fade shadow for readability */
        }
        #intro p {
            max-width: 80%;
            font-size: 1.2em;
            opacity: 0;
            animation: fadeInText 2s ease-in 2s forwards;
            text-shadow: 0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,200,0.3); /* Fade shadow for readability */
        }
        #skip-text {
            font-size: 0.9em;
            color: #ffd700;
            cursor: pointer;
            margin-top: 20px;
            text-decoration: underline;
        }
        @keyframes flipIn {
            0% { transform: rotateY(-180deg); opacity: 0; }
            100% { transform: rotateY(0); opacity: 1; }
        }
        @keyframes fadeInText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        /* Mobile adjustments for intro */
        @media (max-width: 768px) { 
            #intro h1 { font-size: 2.2em; }
            #intro p { font-size: 1em; max-width: 90%; }
        }
        #stored-message {
            font-size: 0.8em;
            color: #ffd700;
            opacity: 0;
            transition: opacity 1s;
            margin-top: 5px;
        }
        #stored-message.visible {
            opacity: 1;
        }

        .input-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 20px;
        }
        .wish-controls {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
        }
        .wish-field input {
            width: 100%;
        }
        .primary-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }
        #followup-wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: left;
        }
        #followup-wrapper label {
            font-size: 0.9em;
            letter-spacing: 0.5px;
            color: rgba(255,255,255,0.85);
        }
        #followup-input {
            width: 100%;
            min-height: 80px;
            resize: vertical;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid rgba(0,255,200,0.2);
            background: rgba(0,0,0,0.35);
            color: #fff;
            font-family: 'Georgia', serif;
            box-shadow: inset 0 0 12px rgba(0,255,200,0.08);
            transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        #followup-input:focus {
            border-color: rgba(0,255,200,0.6);
            box-shadow: inset 0 0 18px rgba(0,255,200,0.18);
            outline: none;
        }
        #response {
            width: 100%;
            margin-top: 10px;
            background: rgba(0,0,0,0.35);
            border: 1px solid rgba(0,255,200,0.25);
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 0 24px rgba(0,255,200,0.15);
            display: none;
        }
        #conversation-track {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-bottom: 16px;
        }
        .crumb {
            position: relative;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 0.82em;
            letter-spacing: 0.4px;
            background: rgba(0,255,200,0.15);
            border: 1px solid rgba(0,255,200,0.35);
            color: #b3ffe5;
            backdrop-filter: blur(6px);
            box-shadow: 0 0 12px rgba(0,255,200,0.12);
        }
        .crumb.wish { background: rgba(255,215,0,0.15); border-color: rgba(255,215,0,0.45); color: #ffe9a6; }
        .crumb.note { background: rgba(255,140,0,0.12); border-color: rgba(255,140,0,0.4); color: #ffd4a1; }
        .crumb.reflection { background: rgba(135,206,250,0.12); border-color: rgba(135,206,250,0.4); color: #d1f1ff; }
        #conversation-body {
            max-height: 260px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-right: 6px;
        }
        .conversation::-webkit-scrollbar { width: 6px; }
        .conversation::-webkit-scrollbar-thumb { background: rgba(0,255,200,0.4); border-radius: 6px; }
        .bubble {
            padding: 16px;
            border-radius: 14px;
            text-align: left;
            line-height: 1.5;
            animation: fadeSlide 0.6s ease;
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 12px 24px rgba(0,0,0,0.18);
        }
        .bubble p { margin: 0 0 10px; }
        .bubble p:last-child { margin-bottom: 0; }
        .bubble.wish { background: linear-gradient(135deg, rgba(255,215,0,0.25), rgba(0,0,0,0.4)); border-color: rgba(255,215,0,0.45); }
        .bubble.note { background: linear-gradient(135deg, rgba(255,140,0,0.25), rgba(0,0,0,0.35)); border-color: rgba(255,140,0,0.35); }
        .bubble.reflection { background: linear-gradient(135deg, rgba(0,255,200,0.2), rgba(0,0,0,0.45)); border-color: rgba(0,255,200,0.35); }
        .bubble.thinking { font-style: italic; opacity: 0.8; text-align: center; }
        .action-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
            align-items: center;
            margin-top: 18px;
        }
        button.primary {
            background: linear-gradient(135deg, rgba(0,255,200,0.65), rgba(0,180,255,0.65));
            color: #021618;
            font-weight: 600;
        }
        button.primary:disabled { opacity: 0.6; cursor: not-allowed; }
        button.secondary {
            background: rgba(255,255,255,0.12);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.25);
        }
        button.secondary:hover { box-shadow: 0 0 15px rgba(255,255,255,0.3); }
        button.ghost {
            background: rgba(0,0,0,0.35);
            color: #ffe679;
            border: 1px solid rgba(255,215,0,0.4);
        }
        button.ghost:hover { box-shadow: 0 0 18px rgba(255,215,0,0.4); }
        button.icon {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1em;
            background: rgba(0,0,0,0.35);
            border: 1px solid rgba(0,255,200,0.45);
            color: #b8fff0;
            position: absolute;
            top: 12px;
            right: 12px;
            box-shadow: 0 0 18px rgba(0,255,200,0.25);
            z-index: 12;
        }
        button.icon:hover { transform: translateY(-2px); }
        button.icon.close {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(0,0,0,0.35);
            color: #fff;
            border-color: rgba(255,255,255,0.3);
            width: 32px;
            height: 32px;
        }
        .info-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.75);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 50;
        }
        .info-overlay.show { display: flex; }
        .info-card {
            position: relative;
            width: min(90%, 420px);
            background: rgba(5, 25, 35, 0.92);
            border: 1px solid rgba(0,255,200,0.35);
            border-radius: 18px;
            padding: 28px;
            text-align: left;
            box-shadow: 0 30px 60px rgba(0,0,0,0.45);
            animation: floatUp 0.5s ease;
        }
        .info-card h2 {
            margin-top: 0;
            margin-bottom: 12px;
            text-align: center;
            letter-spacing: 0.8px;
        }
        .info-card ol {
            padding-left: 18px;
            margin: 0 0 12px;
        }
        .info-card li { margin-bottom: 8px; }
        .info-card .footnote { font-size: 0.85em; color: rgba(255,255,255,0.75); text-align: center; }
        .timeline .crumb { animation: glowPulse 3.5s ease-in-out infinite; }
        @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 10px rgba(0,255,200,0.35); }
            50% { box-shadow: 0 0 18px rgba(0,255,200,0.65); }
        }
        @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 540px) {
            .primary-actions { flex-direction: column; }
            button.icon { top: -10px; right: -10px; }
            #response { padding: 16px; }
            .action-bar { flex-direction: column; }
            .info-card { width: 92%; padding: 24px; }
        }

        .conversation-preview {
            margin-top: 8px;
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(0,255,200,0.2);
            border-radius: 12px;
            padding: 14px;
        }
        .stored-event {
            padding: 10px 0;
            border-bottom: 1px dashed rgba(255,255,255,0.15);
        }
        .stored-event:last-child { border-bottom: none; }
        .stored-event strong {
            display: block;
            margin-bottom: 4px;
            color: rgba(0,255,200,0.75);
            letter-spacing: 0.4px;
        }
        .stored-event.wish strong { color: rgba(255,215,0,0.75); }
        .stored-event.note strong { color: rgba(255,140,0,0.75); }
        .stored-event.reflection strong { color: rgba(135,206,250,0.85); }
        .stored-event p {
            margin: 0;
            font-style: italic;
            color: rgba(255,255,255,0.82);
        }
        .action-bar button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 170px;
        }
    </style>
</head>
<body class="intro-active">
    <div id="intro">
        <h1>Happy Birthday, Diana<span class="emoji-heart" role="img" aria-label="love">❤️</span></h1>
        <p>"It all began with a simple message under the glow of the northern lights: 'I know we don't know each other, but you're living my dream...' From that unexpected spark, it blossomed into discovering a truly wonderful soul—one I care for deeply, respect immensely, and always strive to stand by, no matter where life takes us. Birthdays aren't just for you; they're a beautiful reminder for those who cherish you, celebrating the joy of being woven into your incredible story."</p>
        <div id="skip-text" onclick="skipIntro()">Tap to skip</div>
    </div>
    <div id="aurora">
        <video id="aurora-video" autoplay loop muted playsinline>
            <source src="

https://cdn-cf-east.streamable.com/video/mp4/46yekd.mp4?Expires=1759238433257&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=RzrhuSTXuLFZayv06DuP552QdiNtFPyMoLeShUnaZxurAjIbRwajLYZAZVN9WCGsjeJq9zHTmQiSUQngLyJyPJBHgyEtLFG1jgIP5Kjhz2-NSzlKBE6xwNLkDAM892rLpCmsLCj~ZpaoGYUysK3gYRc5oPSpWk66du6Vnm9WR1iq97SuTQxFjtP5HYRa6Bl3InLfzJkgTxbsdowtB1SgmuoIvtVBVA5EcWrP855YaWRTjd5tO~ech~v3ybQCODXfu8Xz9Z6bORAYmSXusEoKL~PgrSUE2Ha7IWU-DGXaTKYlxtY7m9oFcHBNTltKkIhUCGQ2iSJSkrYJM8zjGJ28KQ__" type="video/mp4">
        </video>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="constellation"></div>
    </div>
    <div id="content">
        <h1>Make a wish<span class="emoji-star" role="img" aria-label="star">⭐</span></h1>
        <p>Under this magical sky, make a wish and receive a reflective insight.</p>
        <button id="guide-button" class="icon" aria-label="How this works" onclick="openGuide()">?</button>
        <div id="initial-controls" class="input-section">
            <div class="wish-field">
                <input type="text" id="wish-input" placeholder="Type your wish here..." autocomplete="off">
            </div>
            <div class="primary-actions">
                <button id="submit-btn" class="primary" onclick="processWish()">Submit Wish</button>
            </div>
        </div>
        <div id="response">
            <div id="conversation-track" class="timeline"></div>
            <div id="conversation-body" class="conversation"></div>
        </div>
        <div id="followup-wrapper" class="followup-block" style="display:none;">
            <label for="followup-input">Share the next thought or question guiding you forward:</label>
            <textarea id="followup-input" placeholder="Add a note before we continue..."></textarea>
        </div>
        <div class="action-bar">
            <button id="continue-btn" class="primary" style="display:none;" onclick="continueReflection()">Continue Reflection</button>
            <button id="store-btn" class="primary" style="display:none;" onclick="storeReflection()">Store This Reflection</button>
            <button id="export-btn" class="primary" style="display:none;" onclick="exportConversation()">Download Conversation</button>
            <button id="new-wish-btn" class="ghost" style="display:none;" onclick="startNewWish()">Make a New Wish</button>
            <span id="stored-message">Wish stored!</span>
            <button class="secondary" onclick="viewStored()">View Stored Reflections</button>
        </div>
        <div id="stored-list"></div>
    </div>
    <div id="toast" class="toast" role="status" aria-live="polite"></div>
    <div id="confirm-overlay" class="modal-overlay" aria-hidden="true">
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="confirm-message">
            <p id="confirm-message"></p>
            <div class="modal-actions">
                <button id="confirm-yes" class="confirm-btn">Yes</button>
                <button id="confirm-no" class="cancel-btn">Cancel</button>
            </div>
        </div>
    </div>
    <div id="guide-overlay" class="info-overlay" aria-hidden="true">
        <div class="info-card" role="dialog" aria-modal="true" aria-labelledby="guide-title">
            <button id="guide-close" class="icon close" aria-label="Close guide">&times;</button>
            <h2 id="guide-title">How this space works</h2>
            <ol>
                <li><strong>Make a wish:</strong> share what is on your heart or mind and press <em>Submit Wish</em>.</li>
                <li><strong>Receive a reflection:</strong> read the response, then jot a follow-up thought to continue the dialogue.</li>
                <li><strong>Keep exploring:</strong> add new notes, store meaningful insights, or download the conversation as a keepsake.</li>
                <li><strong>Return anytime:</strong> stored reflections live here so you can revisit or release them whenever you like.</li>
            </ol>
            <p class="footnote">Tip: you can always start a fresh wish with the button beside <em>Submit Wish</em>.</p>
        </div>
    </div>
    <div id="overlay">
        <div id="error-message">
            <p>Oops, the stars aren't aligning right now. Please try again when your connection is stronger-your birthday magic awaits!</p>
            <button onclick="hideError()">Close</button>
        </div>
    </div>
            <script>
        function showError() { document.getElementById('overlay').style.display = 'flex'; }
        function hideError() { document.getElementById('overlay').style.display = 'none'; }

        let toastTimeout = null;

        function showToast(message, tone = 'info', duration = 2800) {
            const toast = document.getElementById('toast');
            if (!toast) return;
            if (toastTimeout) {
                clearTimeout(toastTimeout);
                toastTimeout = null;
            }
            toast.className = 'toast';
            if (tone && tone !== 'info') toast.classList.add(tone);
            toast.textContent = message;
            void toast.offsetWidth;
            toast.classList.add('show');
            if (duration !== Infinity) {
                toastTimeout = setTimeout(hideToast, duration);
            }
        }

        function hideToast() {
            const toast = document.getElementById('toast');
            if (!toast) return;
            toast.classList.remove('show');
            if (toastTimeout) {
                clearTimeout(toastTimeout);
                toastTimeout = null;
            }
        }

        const confirmOverlay = document.getElementById('confirm-overlay');
        const confirmMessage = document.getElementById('confirm-message');
        const confirmYes = document.getElementById('confirm-yes');
        const confirmNo = document.getElementById('confirm-no');
        let confirmAction = null;

        function showConfirm(message, onConfirm) {
            if (!(confirmOverlay && confirmMessage)) {
                if (typeof onConfirm === 'function') onConfirm();
                return;
            }
            confirmAction = onConfirm;
            confirmMessage.textContent = message;
            confirmOverlay.classList.add('show');
            confirmOverlay.setAttribute('aria-hidden', 'false');
            if (confirmYes) confirmYes.focus();
        }

        function resolveConfirm(confirmed) {
            if (!confirmOverlay) return;
            confirmOverlay.classList.remove('show');
            confirmOverlay.setAttribute('aria-hidden', 'true');
            const action = confirmAction;
            confirmAction = null;
            if (confirmed && typeof action === 'function') action();
        }

        if (confirmYes) confirmYes.addEventListener('click', function () { resolveConfirm(true); });
        if (confirmNo) confirmNo.addEventListener('click', function () { resolveConfirm(false); });
        if (confirmOverlay) confirmOverlay.addEventListener('click', function (event) {
            if (event.target === confirmOverlay) resolveConfirm(false);
        });
        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && confirmOverlay && confirmOverlay.classList.contains('show')) {
                resolveConfirm(false);
            }
        });

        let currentWish = null;

        function safeForPrompt(value) {
            return String(value || '').replace(/`/g, "'").replace(/\s+/g, ' ').trim();
        }

        function ensureResponseStructure() {
            const responseDiv = document.getElementById('response');
            const track = document.getElementById('conversation-track');
            const body = document.getElementById('conversation-body');
            return { responseDiv, track, body };
        }

        function renderReflections(triggerAnimation = true) {
            const refs = ensureResponseStructure();
            const responseDiv = refs.responseDiv;
            const track = refs.track;
            const body = refs.body;
            if (!responseDiv || !track || !body) return;

            track.innerHTML = '';
            body.innerHTML = '';

            if (!currentWish || !currentWish.timeline || !currentWish.timeline.length) {
                if (currentWish && currentWish.waiting) {
                    responseDiv.style.display = 'block';
                    const thinking = document.createElement('div');
                    thinking.className = 'bubble thinking';
                    thinking.textContent = 'Reflecting on your wish...';
                    body.appendChild(thinking);
                } else {
                    responseDiv.style.display = 'none';
                }
                updateActionVisibility();
                return;
            }

            currentWish.timeline.forEach(function (entry) {
                const crumb = document.createElement('div');
                crumb.className = 'crumb ' + entry.type;
                crumb.textContent = entry.label;
                track.appendChild(crumb);

                const bubble = document.createElement('div');
                bubble.className = 'bubble ' + entry.type;
                entry.text.split(/\n+/).forEach(function (paragraph) {
                    const p = document.createElement('p');
                    p.textContent = paragraph.trim();
                    bubble.appendChild(p);
                });
                body.appendChild(bubble);
            });

            if (currentWish.waiting) {
                const thinking = document.createElement('div');
                thinking.className = 'bubble thinking';
                thinking.textContent = 'Reflecting on your words...';
                body.appendChild(thinking);
            }

            responseDiv.style.display = 'block';
            if (triggerAnimation) {
                responseDiv.classList.remove('with-delay', 'show', 'visible');
                responseDiv.classList.add('with-delay');
                void responseDiv.offsetWidth;
                responseDiv.classList.add('show');
            } else {
                responseDiv.classList.remove('with-delay', 'show');
                responseDiv.classList.add('visible');
            }

            setTimeout(function () {
                body.scrollTop = body.scrollHeight;
            }, 60);

            updateActionVisibility();
            focusFollowup();
        }

        const baseGuidance = 'You are Diana\'s steady inner voice. Respond with sincerity, curiosity, and gentle daring. Keep every reply under 90 words in a single paragraph and end with an original line that feels like a keepsake.';

        function buildInitialPrompt(wish) {
            const cleanWish = safeForPrompt(wish);
            return baseGuidance + ' Evaluate the wish in quotes: "' + cleanWish + '". If it lacks meaningful content, kindly request more detail in a short paragraph. Otherwise, craft one unique paragraph that mirrors her emotion or ambition, introduces one unexpected lens or question that sharpens her direction, balances realism with hope, and ends with a memorable closing line inviting thoughtful action.';
        }

        function buildFollowupPrompt(wish, history, note) {
            history = history || [];
            const cleanWish = safeForPrompt(wish);
            const cleanHistory = history.map(function (entry) { return safeForPrompt(entry); });
            const lastReflection = cleanHistory.length ? cleanHistory[cleanHistory.length - 1] : '';
            const earlierReflections = cleanHistory.slice(0, -1).slice(-2);
            let earlierSummary = '';
            if (earlierReflections.length) {
                const parts = earlierReflections.map(function (text) {
                    return '"' + text + '"';
                });
                earlierSummary = ' Earlier reflections you offered before this note: ' + parts.join(' | ') + '.';
            }
            const cleanNote = safeForPrompt(note);
            return baseGuidance + ' Original wish: "' + cleanWish + '". Your latest reflection was: "' + lastReflection + '".' + earlierSummary + ' She now adds: "' + cleanNote + '". Continue the dialogue with another paragraph under 90 words that acknowledges where the last reflection leaves her, offers a fresh angle or probing question, and finishes with a distinct memorable line. If the wish still feels unclear, focus on guiding her to clarify it.';
        }

        async function callReflectionAPI(prompt) {
            const res = await fetch('/openai-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });
            if (!res.ok) throw new Error('API error');
            const data = await res.json();
            if (data && data.error) {
                throw new Error(data.error.message || 'Proxy error');
            }
            const message = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
            return (message || '').trim();
        }

        async function processWish() {
            const wishInput = document.getElementById('wish-input');
            const submitBtn = document.getElementById('submit-btn');
            const followupInput = document.getElementById('followup-input');
            const wish = wishInput ? wishInput.value.trim() : '';
            if (!wish) {
                showToast('Share a wish before sending it to the stars.', 'warn');
                return;
            }
            const minimalWish = wish.replace(/[^a-zA-Z0-9]/g, '');
            if (minimalWish.length < 3) {
                showToast('Give a little more detail so the reflection can truly help.', 'warn');
                return;
            }

            if (followupInput) followupInput.value = '';
            if (submitBtn) submitBtn.disabled = true;

            currentWish = {
                wish: wish,
                history: [],
                timeline: [
                    { type: 'wish', label: 'Wish', text: wish }
                ],
                waiting: true
            };
            renderReflections(false);

            try {
                const prompt = buildInitialPrompt(wish);
                const reflection = await callReflectionAPI(prompt);
                if (!reflection) throw new Error('Empty reflection');
                currentWish.history.push(reflection);
                currentWish.timeline.push({ type: 'reflection', label: 'Reflection 1', text: reflection });
                currentWish.waiting = false;
                renderReflections(true);
            } catch (error) {
                console.error(error);
                currentWish = null;
                renderReflections(false);
                showError();
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                updateActionVisibility();
            }
        }

        async function continueReflection() {
            if (!currentWish || !currentWish.history || !currentWish.history.length) {
                showToast('Make a wish first, then we can go deeper.', 'warn');
                return;
            }
            const followupInput = document.getElementById('followup-input');
            const continueBtn = document.getElementById('continue-btn');
            const storeBtn = document.getElementById('store-btn');
            if (!followupInput) return;
            const note = followupInput.value.trim();
            if (note.replace(/[^a-zA-Z0-9]/g, '').length < 3) {
                showToast('Share a little more so we can continue meaningfully.', 'warn');
                return;
            }

            if (continueBtn) continueBtn.disabled = true;
            if (storeBtn) storeBtn.style.display = 'none';

            const existingNotes = currentWish.timeline.filter(function (entry) { return entry.type === 'note'; }).length;
            const noteEntry = { type: 'note', label: 'Note ' + (existingNotes + 1), text: note };
            currentWish.timeline.push(noteEntry);
            currentWish.waiting = true;
            renderReflections(false);

            try {
                const prompt = buildFollowupPrompt(currentWish.wish, currentWish.history, note);
                const reflection = await callReflectionAPI(prompt);
                if (!reflection) throw new Error('Empty reflection');
                currentWish.history.push(reflection);
                const reflectionLabel = 'Reflection ' + currentWish.history.length;
                currentWish.timeline.push({ type: 'reflection', label: reflectionLabel, text: reflection });
                currentWish.waiting = false;
                if (followupInput) followupInput.value = '';
                renderReflections(true);
            } catch (error) {
                console.error(error);
                currentWish.timeline.pop(); // remove note entry
                currentWish.waiting = false;
                renderReflections(false);
                showError();
            } finally {
                if (continueBtn) continueBtn.disabled = false;
                updateActionVisibility();
            }
        }

        function storeReflection() {
            if (!currentWish || !currentWish.history || !currentWish.history.length) return;
            const snapshotTimeline = currentWish.timeline ? currentWish.timeline.map(function (entry) {
                return { type: entry.type, label: entry.label, text: entry.text };
            }) : null;
            const entry = {
                wish: currentWish.wish,
                history: currentWish.history.slice(),
                reflection: currentWish.timeline.filter(function (item) { return item.type === 'reflection'; }).map(function (item) { return item.text; }).join('\n\n'),
                timeline: snapshotTimeline
            };
            const existing = JSON.parse(localStorage.getItem('reflections') || '[]');
            existing.push(entry);
            localStorage.setItem('reflections', JSON.stringify(existing));
            const storedMessage = document.getElementById('stored-message');
            if (storedMessage) {
                storedMessage.classList.add('visible');
                setTimeout(function () { storedMessage.classList.remove('visible'); }, 2000);
            }
        }

        function exportConversation() {
            if (!currentWish || !currentWish.timeline || !currentWish.timeline.length) {
                showToast('There is no conversation to export yet.', 'warn');
                return;
            }
            const popup = window.open('', '_blank');
            if (!popup) {
                showToast('Enable pop-ups to download the conversation.', 'error', 3500);
                return;
            }
            const title = 'Wish Reflection';
            const items = currentWish.timeline.map(function (entry) {
                const label = escapeHtml(entry.label || '');
                const text = escapeHtml(entry.text || '').replace(/\n/g, '<br/>');
                return '<section class="export-entry ' + entry.type + '"><h3>' + label + '</h3><p>' + text + '</p></section>';
            }).join('');
            popup.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + title + '</title><style>body{font-family:Georgia,serif;padding:40px;background:#0b1c2a;color:#effff7;}h1{text-align:center;margin-bottom:30px;}section.export-entry{margin-bottom:24px;padding:18px;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);}section.export-entry.wish{background:rgba(255,215,0,0.12);}section.export-entry.note{background:rgba(255,140,0,0.12);}section.export-entry.reflection{background:rgba(0,255,200,0.12);}h3{margin:0 0 10px;}p{margin:0;line-height:1.6;}</style></head><body><h1>' + escapeHtml(currentWish.wish) + '</h1>' + items + '</body></html>');
            popup.document.close();
            popup.focus();
            popup.print();
        }

        function viewStored() {

    const listDiv = document.getElementById('stored-list');

    const responseDiv = document.getElementById('response');

    const followupWrapper = document.getElementById('followup-wrapper');

    const actionBar = document.querySelector('.action-bar');

    const initialControls = document.getElementById('initial-controls');



    if (listDiv) listDiv.style.display = 'block';

    if (responseDiv) responseDiv.style.display = 'none';

    if (followupWrapper) followupWrapper.style.display = 'none';

    if (actionBar) actionBar.style.display = 'none';

    if (initialControls) initialControls.style.display = 'none';



    const stored = JSON.parse(localStorage.getItem('reflections') || '[]');

    if (!stored.length) {

        if (listDiv) {

            listDiv.innerHTML = '<button onclick="backToMain()" style="margin-bottom: 20px;">Back</button><p>No stored reflections yet.</p>';

        }

        return;

    }



    const items = stored.map(function (entry, index) {

        const wish = escapeHtml(entry && entry.wish ? entry.wish : '');

        const timeline = entry && entry.timeline ? entry.timeline : null;

        const history = entry && Array.isArray(entry.history) ? entry.history : [];

        const fallback = history.length ? history.join('\n\n') : (entry && entry.reflection ? entry.reflection : '');

        const body = timeline ? formatTimelineForDisplay(timeline) : formatStoredReflection(fallback);

        return '<li><strong>Wish:</strong> ' + wish + '<div class="conversation-preview">' + body + '</div><div class="row-actions"><button class="delete-btn" onclick="deleteReflection(' + index + ')">Delete</button></div></li>';

    }).join('');



    if (listDiv) {

        listDiv.innerHTML = '<button onclick="backToMain()" style="margin-bottom: 20px;">Back</button><ul>' + items + '</ul>';

    }

}

function deleteReflection(index) {
            showConfirm('Delete this reflection? The insight will be lost to the night.', function () {
                const stored = JSON.parse(localStorage.getItem('reflections') || '[]');
                if (index < 0 || index >= stored.length) return;
                stored.splice(index, 1);
                localStorage.setItem('reflections', JSON.stringify(stored));
                viewStored();
            });
        }

        function startNewWish() {
            currentWish = null;
            const wishInput = document.getElementById('wish-input');
            const followupInput = document.getElementById('followup-input');
            if (wishInput) {
                wishInput.value = '';
                wishInput.focus();
            }
            if (followupInput) followupInput.value = '';
            renderReflections(false);
            updateActionVisibility();
        }

        function backToMain() {

            const listDiv = document.getElementById('stored-list');

            const responseDiv = document.getElementById('response');

            const actionBar = document.querySelector('.action-bar');

            const initialControls = document.getElementById('initial-controls');

            const followupWrapper = document.getElementById('followup-wrapper');

            if (listDiv) listDiv.style.display = 'none';

            if (actionBar) actionBar.style.display = '';

            if (initialControls) initialControls.style.display = '';

            if (responseDiv && currentWish && currentWish.timeline && currentWish.timeline.length) {

                responseDiv.style.display = 'block';

            }

            if (followupWrapper && currentWish && currentWish.history && currentWish.history.length) {

                followupWrapper.style.display = 'block';

            }

            renderReflections(false);

            updateActionVisibility();

        }



function updateActionVisibility() {
            const storeBtn = document.getElementById('store-btn');
            const continueBtn = document.getElementById('continue-btn');
            const exportBtn = document.getElementById('export-btn');
            const followupWrapper = document.getElementById('followup-wrapper');
            const newWishBtn = document.getElementById('new-wish-btn');
            const followupInput = document.getElementById('followup-input');
            const initialControls = document.getElementById('initial-controls');
            const submitBtn = document.getElementById('submit-btn');
            const hasReflection = currentWish && currentWish.history && currentWish.history.length;
            const isWaiting = currentWish && currentWish.waiting;
            const showInitial = !(currentWish && (isWaiting || hasReflection));
            if (initialControls) {
                initialControls.style.display = showInitial ? 'flex' : 'none';
            }
            if (submitBtn) {
                submitBtn.disabled = !!(currentWish && currentWish.waiting);
            }
            if (storeBtn) storeBtn.style.display = hasReflection ? 'inline-flex' : 'none';
            if (exportBtn) exportBtn.style.display = hasReflection ? 'inline-flex' : 'none';
            if (newWishBtn) newWishBtn.style.display = hasReflection ? 'inline-flex' : 'none';
            if (followupWrapper) followupWrapper.style.display = hasReflection ? 'flex' : 'none';
            if (followupInput) {
                followupInput.disabled = !hasReflection || isWaiting;
                if (!hasReflection) followupInput.value = '';
            }
            if (continueBtn) {
                continueBtn.style.display = hasReflection ? 'inline-flex' : 'none';
                const noteReady = followupInput && followupInput.value.trim().replace(/[^a-zA-Z0-9]/g, '').length >= 3;
                continueBtn.disabled = !hasReflection || isWaiting || !noteReady;
            }
        }

        function focusFollowup() {
            const followupInput = document.getElementById('followup-input');
            if (followupInput && !followupInput.disabled && followupInput.offsetParent !== null) {
                setTimeout(function () {
                    followupInput.focus({ preventScroll: false });
                }, 200);
            }
        }

        function escapeHtml(str) {
            return String(str || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function formatTimelineForDisplay(timeline) {
            if (!Array.isArray(timeline) || !timeline.length) return '';
            return timeline.map(function (entry) {
                const label = escapeHtml(entry.label || '');
                const text = escapeHtml(entry.text || '').replace(/\n/g, '<br/>');
                return '<div class="stored-event ' + (entry.type || 'note') + '"><strong>' + label + '</strong><p>' + text + '</p></div>';
            }).join('');
        }

        function formatStoredReflection(text) {
            return escapeHtml(text || '').replace(/\n/g, '<br/>');
        }

        function openGuide() {
            const overlay = document.getElementById('guide-overlay');
            if (!overlay) return;
            overlay.classList.add('show');
            overlay.setAttribute('aria-hidden', 'false');
        }

        function closeGuide() {
            const overlay = document.getElementById('guide-overlay');
            if (!overlay) return;
            overlay.classList.remove('show');
            overlay.setAttribute('aria-hidden', 'true');
        }

        const followupInput = document.getElementById('followup-input');
        if (followupInput) followupInput.addEventListener('input', updateActionVisibility);

        const guideOverlay = document.getElementById('guide-overlay');
        const guideClose = document.getElementById('guide-close');
        if (guideOverlay) guideOverlay.addEventListener('click', function (event) {
            if (event.target === guideOverlay) closeGuide();
        });
        if (guideClose) guideClose.addEventListener('click', closeGuide);

        backToMain();

        function skipIntro() {
            document.getElementById('intro').classList.add('hidden');
            document.body.classList.remove('intro-active');
        }

        setTimeout(skipIntro, 50000);
        document.getElementById('intro').addEventListener('touchstart', skipIntro);
    </script>
</body>
</html>














        #content {
            position: relative;
            width: 100%;
            max-width: 420px;
            padding: 30px 20px 120px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            align-items: stretch;
            box-sizing: border-box;
        }
        #content > * { width: 100%; }
        .input-section {
            display: flex;
            flex-direction: column;
            gap: 14px;
            align-items: stretch;
            margin: 0;
        }
        .input-section .wish-field input {
            width: 100%;
        }
        .primary-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
        }
        .primary-actions button {
            width: 100%;
        }
        .followup-block {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: rgba(0,0,0,0.35);
            border: 1px solid rgba(0,255,200,0.2);
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 18px 32px rgba(0,0,0,0.25);
            backdrop-filter: blur(6px);
        }
        #followup-wrapper label {
            font-size: 0.92em;
            letter-spacing: 0.5px;
            color: rgba(255,255,255,0.85);
            margin-bottom: 4px;
        }
        #followup-input {
            width: 100%;
            min-height: 84px;
            resize: vertical;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid rgba(0,255,200,0.25);
            background: rgba(0,0,0,0.4);
            color: #fff;
            font-family: 'Georgia', serif;
            box-shadow: inset 0 0 12px rgba(0,255,200,0.08);
            transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        #followup-input:focus {
            border-color: rgba(0,255,200,0.65);
            box-shadow: inset 0 0 18px rgba(0,255,200,0.18);
            outline: none;
        }
        #response {
            width: 100%;
            margin-top: 0;
            background: rgba(0,0,0,0.35);
            border: 1px solid rgba(0,255,200,0.25);
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 0 24px rgba(0,255,200,0.15);
            display: none;
            opacity: 0;
        }
        #response.visible { opacity: 1; }
        #response.with-delay { opacity: 0; }
        #response.with-delay.show { opacity: 1; transition: opacity 0.8s ease-in-out; }
        #response .bubble + .bubble { margin-top: 8px; }
        .action-bar {
            position: sticky;
            bottom: 16px;
            background: rgba(2, 25, 35, 0.88);
            border: 1px solid rgba(0,255,200,0.25);
            border-radius: 18px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
            box-shadow: 0 20px 35px rgba(0,0,0,0.45);
            backdrop-filter: blur(10px);
            z-index: 11;
        }
        .action-bar button {
            width: 100%;
        }
        .action-bar span#stored-message {
            text-align: center;
            margin-top: 6px;
        }
        button.icon {
            z-index: 12;
        }
        @media (max-width: 540px) {
            #content {
                padding: 26px 16px 110px;
                max-width: 100%;
            }
            .primary-actions { gap: 8px; }
            #conversation-body { max-height: 300px; }
        }

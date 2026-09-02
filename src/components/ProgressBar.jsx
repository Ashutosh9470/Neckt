import React, { useState, useEffect } from 'react';

const TARGET_PROGRESS = 78;

export function ProgressBar() {
  const [displayValue, setDisplayValue] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(TARGET_PROGRESS);
      setBarWidth(TARGET_PROGRESS);
      return;
    }

    // Trigger bar fill animation
    const barTimer = setTimeout(() => {
      setBarWidth(TARGET_PROGRESS);
    }, 200);

    // Number count-up animation using requestAnimationFrame
    const startTime = performance.now() + 200;
    const duration = 1600; // 1.6s smooth count

    let animationFrameId;

    const updateCounter = (currentTime) => {
      if (currentTime < startTime) {
        animationFrameId = requestAnimationFrame(updateCounter);
        return;
      }

      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Ease out cubic: 1 - (1 - x)^3
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);
      const currentValue = Math.round(easeOut * TARGET_PROGRESS);

      setDisplayValue(currentValue);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(TARGET_PROGRESS);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      clearTimeout(barTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="progress-card"
      aria-label="Launch Progress"
    >
      {/* Meta Header */}
      <div className="progress-meta-row">
        <div className="progress-label-group">
          <span className="progress-label">
            <span className="progress-label-dot" aria-hidden="true" />
            LAUNCH PROGRESS
          </span>
        </div>

        <div
          className="progress-value-display"
          aria-live="polite"
          aria-atomic="true"
        >
          <span>{displayValue}</span>
          <span className="progress-percent-symbol">%</span>
        </div>
      </div>

      {/* Progress Track & Fill */}
      <div
        className="progress-bar-track"
        role="progressbar"
        aria-valuenow={TARGET_PROGRESS}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Launch readiness progress: 78%"
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${barWidth}%` }}
        >
          {barWidth > 0 && <span className="progress-glow-head" aria-hidden="true" />}
        </div>
      </div>

      {/* Description & Stage */}
      <div className="progress-description">
        <span>Putting the finishing touches on something new.</span>
        <span className="progress-stage-indicator">STAGE 03 / FINAL POLISH</span>
      </div>
    </section>
  );
}

export default ProgressBar;

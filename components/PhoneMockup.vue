<template>
  <div class="phone-fan-wrap">
    <!-- ==================== TAB SWITCHER ==================== -->
    <div class="tabs" role="tablist" :aria-label="t('phoneUi.userType')">
      <button
        v-for="t in tabs"
        :key="t.id"
        type="button"
        role="tab"
        class="tab-btn"
        :class="{ active: activeTab === t.id }"
        :aria-selected="activeTab === t.id"
        @click="setTab(t.id)"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- ==================== PHONE FAN ==================== -->
    <div
      class="phone-fan"
      @touchstart.passive="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div class="phones">
        <article
          v-for="(s, i) in screens"
          :key="`${activeTab}-${s.id}`"
          class="phone"
          :class="{ 'is-active': i === activeIndex }"
          :style="phoneStyle(i)"
          :aria-label="s.label"
          :aria-hidden="i !== activeIndex"
          @click="setActive(i)"
        >
          <div class="phone-frame">
            <span class="phone-notch" aria-hidden="true" />
            <div class="phone-screen">
              <!-- ===================== SHOGIRD: 1. AUTH ===================== -->
              <template v-if="s.id === 'auth'">
                <div class="scn">
                  <div class="auth-logo"><span>U</span></div>
                  <h3 class="scn-title">{{ t('phoneUi.authTitle') }}</h3>
                  <p class="scn-sub">{{ t('phoneUi.authSub1') }}<br />{{ t('phoneUi.authSub2') }}</p>

                  <label class="scn-label">{{ t('phoneUi.phoneLabel') }}</label>
                  <div class="phone-row">
                    <button class="phone-flag" type="button" tabindex="-1">
                      <svg viewBox="0 0 30 20" width="20" height="13" aria-hidden="true">
                        <rect width="30" height="6" fill="#0099b5" />
                        <rect y="6" width="30" height="0.7" fill="#ce1126" />
                        <rect y="6.7" width="30" height="6.6" fill="#fff" />
                        <rect y="13.3" width="30" height="0.7" fill="#ce1126" />
                        <rect y="14" width="30" height="6" fill="#1eb53a" />
                      </svg>
                      <span>+998</span>
                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <span class="phone-number">90 123 45 67</span>
                  </div>

                  <button class="scn-btn">{{ t('phoneUi.sendSms') }}</button>

                  <p class="scn-legal">
                    {{ t('phoneUi.authLegal1') }} <a>{{ t('phoneUi.authLegal2') }}</a>{{ t('phoneUi.authLegal3') }}
                  </p>
                </div>
              </template>

              <!-- ===================== SHOGIRD: 2. OTP ===================== -->
              <template v-else-if="s.id === 'otp'">
                <div class="scn">
                  <button class="scn-back" type="button" tabindex="-1" :aria-label="t('phoneUi.back')">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </button>

                  <h3 class="scn-title">{{ t('phoneUi.otpTitle') }}</h3>
                  <p class="scn-sub">
                    <strong>+998 90 123 45 67</strong><br />
                    {{ t('phoneUi.otpSent') }}
                  </p>

                  <div class="otp-boxes" aria-hidden="true">
                    <div class="otp-box filled">5</div>
                    <div class="otp-box filled">7</div>
                    <div class="otp-box filled">3</div>
                    <div class="otp-box filled">2</div>
                    <div class="otp-box current"><span class="otp-cursor" /></div>
                    <div class="otp-box" />
                  </div>

                  <div class="otp-timer">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 14" />
                    </svg>
                    <span>01:48</span>
                  </div>

                  <button class="scn-btn">{{ t('phoneUi.confirm') }}</button>

                  <p class="scn-legal">{{ t('phoneUi.otpMissing') }} <a>{{ t('phoneUi.resend') }}</a></p>
                </div>
              </template>

              <!-- ===================== SHOGIRD: 3. CERT REQUEST ===================== -->
              <template v-else-if="s.id === 'cert'">
                <div class="scn">
                  <div class="scn-header">
                    <button class="scn-back" type="button" tabindex="-1" :aria-label="t('phoneUi.back')">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                    </button>
                    <h3 class="scn-title scn-title-sm">{{ t('phoneUi.certRequestTitle') }}</h3>
                    <span />
                  </div>

                  <p class="scn-sub scn-sub-tight">{{ t('phoneUi.certRequestSub') }}</p>

                  <div class="form-field">
                    <label>{{ t('phoneUi.mentorName') }}</label>
                    <div class="form-input">Akmal</div>
                  </div>
                  <div class="form-field">
                    <label>{{ t('phoneUi.mentorSurname') }}</label>
                    <div class="form-input">Karimov</div>
                  </div>
                  <div class="form-field">
                    <label>{{ t('phoneUi.phoneLabel') }}</label>
                    <div class="form-input form-input-phone">
                      <span class="mini-flag">
                        <svg viewBox="0 0 30 20" width="14" height="9" aria-hidden="true">
                          <rect width="30" height="6" fill="#0099b5" />
                          <rect y="7" width="30" height="6" fill="#fff" />
                          <rect y="14" width="30" height="6" fill="#1eb53a" />
                        </svg>
                        +998
                      </span>
                      <span>90 555 12 34</span>
                    </div>
                  </div>

                  <label class="checkbox-row">
                    <span class="checkbox checked" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{{ t('phoneUi.checkbox') }}</span>
                  </label>

                  <button class="scn-btn">{{ t('phoneUi.createRequest') }}</button>
                </div>
              </template>

              <!-- ===================== SHOGIRD: 4. HOME ===================== -->
              <template v-else-if="s.id === 'home'">
                <div class="scn scn-home">
                  <div class="home-header">
                    <div class="home-avatar">B</div>
                    <div class="home-greet">
                      <small>{{ t('phoneUi.welcomeSmall') }}</small>
                      <strong>Bahodir</strong>
                    </div>
                    <button class="home-bell" type="button" tabindex="-1" :aria-label="t('phoneUi.notifications')">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                      </svg>
                      <span class="bell-dot" />
                    </button>
                  </div>

                  <div class="home-banner">
                    <div class="banner-text">
                      <strong>{{ t('phoneUi.bannerStrong') }}</strong>
                      <span>{{ t('phoneUi.bannerLine') }}</span>
                    </div>
                  </div>

                  <button class="home-cta" type="button" tabindex="-1">
                    <div class="cta-icon">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.5 13l1.5 8-5-3-5 3 1.5-8" />
                      </svg>
                    </div>
                    <div class="cta-body">
                      <strong>{{ t('phoneUi.newCertificate') }}</strong>
                      <small>{{ t('phoneUi.newCertificateSub') }}</small>
                    </div>
                    <svg class="cta-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>

                  <div class="home-section-row">
                    <h6>{{ t('phoneUi.requests') }}</h6>
                    <span>{{ t('phoneUi.all') }}</span>
                  </div>

                  <div class="order-card">
                    <div class="order-top">
                      <span class="order-num">#230</span>
                      <span class="order-status">
                        <span class="dot-amber" />
                        {{ t('phoneUi.pending') }}
                      </span>
                    </div>
                    <div class="order-name">BAHODIR ISMATOV</div>
                    <div class="order-meta">{{ t('phoneUi.paymentStatus') }}: <strong>{{ t('phoneUi.pending') }}</strong></div>
                    <div class="order-bottom">
                      <span class="order-amount">49 000 <small>UZS</small></span>
                      <button class="order-btn" type="button" tabindex="-1">{{ t('phoneUi.pay') }}</button>
                    </div>
                  </div>

                  <nav class="tabbar" :aria-label="t('phoneUi.mainMenu')">
                    <button class="tab active" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
                      </svg>
                      <span>{{ t('phoneUi.homeTab') }}</span>
                    </button>
                    <button class="tab" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 11h6M9 15h6M5 7h14l-1 14H6z" />
                        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                      </svg>
                      <span>{{ t('phoneUi.ordersTab') }}</span>
                    </button>
                    <button class="tab" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{{ t('phoneUi.profileTab') }}</span>
                    </button>
                  </nav>
                </div>
              </template>

              <!-- ===================== SHOGIRD: 5. PAYMENT ===================== -->
              <template v-else-if="s.id === 'pay'">
                <div class="scn">
                  <div class="scn-header">
                    <button class="scn-back" type="button" tabindex="-1" :aria-label="t('phoneUi.back')">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                    </button>
                    <h3 class="scn-title scn-title-sm">{{ t('phoneUi.paymentTitle') }}</h3>
                    <span />
                  </div>

                  <p class="scn-sub scn-sub-tight">{{ t('phoneUi.orderFor') }} <strong>#230</strong> {{ t('phoneUi.orderForSuffix') }}</p>

                  <div class="pay-card">
                    <div class="pay-card-top">
                      <span class="pay-card-num">#230</span>
                      <span class="pay-card-chip">
                        <svg viewBox="0 0 24 16" width="22" height="14" fill="none" stroke="currentColor" stroke-width="1.4">
                          <rect x="0.7" y="0.7" width="22.6" height="14.6" rx="2" />
                          <path d="M6 4v8M10 4v8M14 4v8M18 4v8" />
                        </svg>
                      </span>
                    </div>
                    <div class="pay-card-amount">49 000 <small>UZS</small></div>
                    <div class="pay-card-pan">**** **** **** ****</div>
                    <div class="pay-card-bottom">
                      <small>{{ t('phoneUi.cashOrWallet') }}</small>
                      <span class="pay-brand">VISA</span>
                    </div>
                  </div>

                  <div class="form-field">
                    <label>{{ t('phoneUi.cardNumber') }}</label>
                    <div class="form-input">8600 1234 5678 9012</div>
                  </div>
                  <div class="form-field">
                    <label>{{ t('phoneUi.cardExpiry') }}</label>
                    <div class="form-input">12 / 28</div>
                  </div>

                  <button class="scn-btn">{{ t('phoneUi.sendOtp') }}</button>
                </div>
              </template>

              <!-- ===================== USTOZ: 1. HOME (PENDING) ===================== -->
              <template v-else-if="s.id === 'ustoz-home'">
                <div class="scn scn-ustoz-home">
                  <div class="ustoz-welcome">
                    <strong>{{ t('phoneUi.mentorWelcome') }}</strong>
                    <small>{{ t('phoneUi.mentorWelcomeSub') }}</small>
                  </div>

                  <button class="ustoz-cta" type="button" tabindex="-1">
                    <div class="cta-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                      </svg>
                    </div>
                    <div class="cta-body">
                      <strong>{{ t('phoneUi.mentorCtaTitle') }}</strong>
                      <small>{{ t('phoneUi.mentorCtaSub') }}</small>
                    </div>
                    <svg class="cta-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>

                  <h6 class="ustoz-section">{{ t('phoneUi.recentRequests') }}</h6>

                  <div class="ustoz-order">
                    <div class="ustoz-order-top">
                      <span class="num-circle">
                        <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <polyline points="19 12 12 19 5 12" />
                        </svg>
                        #232
                      </span>
                      <span class="badge-pending">{{ t('phoneUi.pending') }}</span>
                    </div>

                    <div class="ustoz-amount">49000 <small>UZS</small></div>

                    <div class="ustoz-row">{{ t('phoneUi.student') }}: <strong>BURXON DAVRONOV</strong></div>
                    <div class="ustoz-row">{{ t('phoneUi.phone') }}: <strong>+998888939402</strong></div>
                    <div class="ustoz-row">
                      {{ t('phoneUi.paymentStatus') }}: <strong class="paid">{{ t('phoneUi.successful') }}</strong>
                    </div>

                    <div class="ustoz-msg">
                      "{{ t('phoneUi.mentorMessage') }}"
                    </div>

                    <button class="ustoz-confirm" type="button" tabindex="-1">
                      {{ t('phoneUi.confirmAction') }}
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>

                  <nav class="tabbar" :aria-label="t('phoneUi.mainMenu')">
                    <button class="tab active" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
                      </svg>
                      <span>{{ t('phoneUi.homeTab') }}</span>
                    </button>
                    <button class="tab" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 11h6M9 15h6M5 7h14l-1 14H6z" />
                        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                      </svg>
                      <span>{{ t('phoneUi.ordersTab') }}</span>
                    </button>
                    <button class="tab" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{{ t('phoneUi.profileTab') }}</span>
                    </button>
                  </nav>
                </div>
              </template>

              <!-- ===================== USTOZ: 2. CONFIRM + SIGNATURE ===================== -->
              <template v-else-if="s.id === 'ustoz-confirm'">
                <div class="scn">
                  <div class="scn-header">
                    <button class="scn-back" type="button" tabindex="-1" :aria-label="t('phoneUi.back')">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                    </button>
                    <h3 class="scn-title scn-title-sm">{{ t('phoneUi.confirmOrderTitle') }}</h3>
                    <span />
                  </div>

                  <div class="info-banner">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>{{ t('phoneUi.confirmOrderInfo') }}</span>
                  </div>

                  <div class="ustoz-order ustoz-order-mini">
                    <div class="ustoz-order-top">
                      <span class="num-circle">
                        <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <polyline points="19 12 12 19 5 12" />
                        </svg>
                        #232
                      </span>
                      <span class="badge-pending">{{ t('phoneUi.pending') }}</span>
                    </div>
                    <div class="ustoz-amount">49000 <small>UZS</small></div>
                    <div class="ustoz-row">{{ t('phoneUi.mentor') }}: <strong>BURXON DAVRONOV</strong></div>
                    <div class="ustoz-row">{{ t('phoneUi.phone') }}: <strong>+998888939402</strong></div>
                    <div class="ustoz-msg">"{{ t('phoneUi.mentorMessageShort') }}"</div>
                  </div>

                  <div class="signature-row">
                    <span class="sig-title">{{ t('phoneUi.signature') }}</span>
                    <span class="sig-clear">{{ t('phoneUi.clearSignature') }}</span>
                  </div>

                  <div class="signature-pad">
                    <svg viewBox="0 0 140 80" preserveAspectRatio="xMidYMid meet">
                      <path
                        d="M 20,70 C 30,30 50,20 60,50 C 70,70 80,40 90,60 C 95,30 110,25 120,55"
                        stroke="#1E293B"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>

                  <p class="sig-hint">{{ t('phoneUi.signatureHint') }}</p>

                  <button class="scn-btn">
                    {{ t('phoneUi.viewCertificate') }}
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </template>

              <!-- ===================== USTOZ: 3. CERTIFICATE REVIEW ===================== -->
              <template v-else-if="s.id === 'ustoz-cert'">
                <div class="scn">
                  <div class="scn-header">
                    <button class="scn-back" type="button" tabindex="-1" :aria-label="t('phoneUi.back')">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                      </svg>
                    </button>
                    <h3 class="scn-title scn-title-sm">{{ t('phoneUi.confirmOrderTitle') }}</h3>
                    <span />
                  </div>

                  <div class="info-banner">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>{{ t('phoneUi.checkCertificateInfo') }}</span>
                  </div>

                  <div class="cert-block">
                    <div class="cert-top">
                      <span>{{ t('phoneUi.mentorUpper') }}</span>
                      <span class="cert-dot" />
                      <span>{{ t('phoneUi.studentUpper') }}</span>
                    </div>

                    <h2 class="cert-big">{{ t('phoneUi.certificateUpper') }}</h2>

                    <p class="cert-greeting">
                      {{ t('phoneUi.dearStudent') }}<br />
                      <strong>DAVRONOV BURXON</strong>
                    </p>

                    <p class="cert-text">
                      {{ t('phoneUi.certificateText1') }}
                      {{ t('phoneUi.certificateText2') }}
                      {{ t('phoneUi.certificateText3') }}
                    </p>

                    <div class="cert-row">
                      <div class="cert-sign-col">
                        <svg class="cert-sign-svg" viewBox="0 0 100 30" preserveAspectRatio="xMidYMid meet">
                          <path
                            d="M 5,22 C 12,8 22,5 30,18 C 38,28 46,12 55,20 C 62,8 75,8 85,18 C 90,22 95,15 95,18"
                            stroke="#1E293B"
                            stroke-width="1.5"
                            fill="none"
                            stroke-linecap="round"
                          />
                        </svg>
                        <strong>ISMATOV BAHODIR</strong>
                      </div>

                      <div class="cert-qr" aria-hidden="true">
                        <svg viewBox="0 0 36 36" width="42" height="42">
                          <rect width="36" height="36" fill="#fff" />
                          <!-- 3 finder corners -->
                          <g fill="#0f172a">
                            <rect x="2" y="2" width="9" height="9" />
                            <rect x="25" y="2" width="9" height="9" />
                            <rect x="2" y="25" width="9" height="9" />
                          </g>
                          <g fill="#fff">
                            <rect x="4" y="4" width="5" height="5" />
                            <rect x="27" y="4" width="5" height="5" />
                            <rect x="4" y="27" width="5" height="5" />
                          </g>
                          <g fill="#0f172a">
                            <rect x="5" y="5" width="3" height="3" />
                            <rect x="28" y="5" width="3" height="3" />
                            <rect x="5" y="28" width="3" height="3" />
                            <!-- random data cells -->
                            <rect x="13" y="3" width="1" height="1" />
                            <rect x="15" y="2" width="1" height="2" />
                            <rect x="17" y="3" width="2" height="1" />
                            <rect x="20" y="2" width="1" height="2" />
                            <rect x="22" y="3" width="2" height="1" />
                            <rect x="13" y="6" width="2" height="1" />
                            <rect x="17" y="5" width="1" height="2" />
                            <rect x="20" y="6" width="2" height="1" />
                            <rect x="13" y="9" width="1" height="2" />
                            <rect x="16" y="9" width="2" height="1" />
                            <rect x="19" y="9" width="1" height="2" />
                            <rect x="22" y="9" width="1" height="1" />
                            <rect x="14" y="13" width="2" height="1" />
                            <rect x="17" y="13" width="1" height="2" />
                            <rect x="20" y="13" width="1" height="1" />
                            <rect x="22" y="14" width="1" height="2" />
                            <rect x="13" y="17" width="1" height="1" />
                            <rect x="15" y="17" width="2" height="2" />
                            <rect x="19" y="17" width="1" height="1" />
                            <rect x="21" y="17" width="2" height="1" />
                            <rect x="13" y="21" width="2" height="1" />
                            <rect x="16" y="20" width="1" height="2" />
                            <rect x="18" y="21" width="2" height="1" />
                            <rect x="22" y="20" width="1" height="2" />
                            <rect x="14" y="25" width="2" height="1" />
                            <rect x="17" y="24" width="1" height="2" />
                            <rect x="20" y="25" width="1" height="1" />
                            <rect x="13" y="28" width="2" height="2" />
                            <rect x="17" y="29" width="1" height="1" />
                            <rect x="19" y="28" width="2" height="1" />
                            <rect x="22" y="29" width="1" height="2" />
                            <rect x="13" y="32" width="1" height="1" />
                            <rect x="16" y="32" width="2" height="2" />
                            <rect x="20" y="33" width="1" height="1" />
                            <rect x="22" y="32" width="1" height="2" />
                            <rect x="25" y="14" width="1" height="2" />
                            <rect x="27" y="13" width="2" height="1" />
                            <rect x="30" y="14" width="1" height="2" />
                            <rect x="32" y="13" width="2" height="1" />
                            <rect x="25" y="17" width="2" height="1" />
                            <rect x="28" y="17" width="1" height="2" />
                            <rect x="31" y="17" width="1" height="1" />
                            <rect x="33" y="18" width="1" height="1" />
                            <rect x="25" y="21" width="1" height="1" />
                            <rect x="27" y="20" width="2" height="2" />
                            <rect x="30" y="21" width="2" height="1" />
                            <rect x="33" y="20" width="1" height="2" />
                            <rect x="25" y="25" width="2" height="1" />
                            <rect x="28" y="25" width="1" height="2" />
                            <rect x="30" y="26" width="1" height="1" />
                            <rect x="32" y="25" width="2" height="2" />
                            <rect x="25" y="29" width="1" height="2" />
                            <rect x="27" y="28" width="2" height="1" />
                            <rect x="30" y="29" width="2" height="2" />
                            <rect x="33" y="29" width="1" height="1" />
                            <rect x="25" y="32" width="2" height="2" />
                            <rect x="28" y="33" width="1" height="1" />
                            <rect x="30" y="32" width="1" height="2" />
                            <rect x="32" y="33" width="2" height="1" />
                          </g>
                        </svg>
                      </div>
                    </div>

                    <div class="cert-meta">
                      <span>{{ t('phoneUi.platformName') }}</span>
                      <span>10.05.2026 №UZ000232</span>
                    </div>
                  </div>

                  <div class="action-row">
                    <button class="reject-btn" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {{ t('phoneUi.reject') }}
                    </button>
                    <button class="approve-btn" type="button" tabindex="-1">
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {{ t('phoneUi.approve') }}
                    </button>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <span v-if="i === activeIndex" class="phone-glow" aria-hidden="true" />
        </article>
      </div>
    </div>

    <!-- ==================== DOTS ==================== -->
    <div class="dots" role="tablist" :aria-label="t('phoneUi.screens')">
      <button
        v-for="(s, i) in screens"
        :key="`dot-${activeTab}-${s.id}`"
        type="button"
        role="tab"
        class="dot"
        :class="{ active: i === activeIndex }"
        :aria-selected="i === activeIndex"
        :aria-label="s.label"
        @click="setActive(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

type TabId = 'shogird' | 'ustoz'

interface Screen {
  id: string
  label: string
}

const tabs = computed<{ id: TabId; label: string }[]>(() => [
  { id: 'shogird', label: t('phoneUi.tabStudent') },
  { id: 'ustoz', label: t('phoneUi.tabMentor') }
])

const screensByTab = computed<Record<TabId, Screen[]>>(() => ({
  shogird: [
    { id: 'auth', label: t('phoneUi.screenAuth') },
    { id: 'otp', label: t('phoneUi.screenOtp') },
    { id: 'cert', label: t('phoneUi.screenCert') },
    { id: 'home', label: t('phoneUi.screenHome') },
    { id: 'pay', label: t('phoneUi.screenPay') }
  ],
  ustoz: [
    { id: 'ustoz-home', label: t('phoneUi.screenMentorHome') },
    { id: 'ustoz-confirm', label: t('phoneUi.screenMentorConfirm') },
    { id: 'ustoz-cert', label: t('phoneUi.screenMentorCert') }
  ]
}))

const activeTab = ref<TabId>('shogird')
const screens = computed(() => screensByTab.value[activeTab.value])
const activeIndex = ref(0)

// Slot'lar (5 ta) — fan ko'rinishi uchun
const slotConfig = [
  { x: -220, rot: -9, scale: 0.8, opacity: 0.55, z: 1 },
  { x: -110, rot: -4, scale: 0.9, opacity: 0.78, z: 2 },
  { x: 0, rot: 0, scale: 1, opacity: 1, z: 5 },
  { x: 110, rot: 4, scale: 0.9, opacity: 0.78, z: 2 },
  { x: 220, rot: 9, scale: 0.8, opacity: 0.55, z: 1 }
]

// Ekranlar soniga qarab har bir telefonni qaysi slotga joylashtirishni hisoblaymiz.
// 5 ekran → 5 slotning hammasi to'ladi. 3 ekran → markazdagi 3 slot (1, 2, 3) ishlatiladi.
const slotForPhone = (i: number) => {
  const n = screens.value.length
  const rel = ((i - activeIndex.value) % n + n) % n
  if (n === 3) {
    return [2, 3, 1][rel]
  }
  return (rel + 2) % 5
}

const phoneStyle = (i: number) => {
  const cfg = slotConfig[slotForPhone(i)]
  return {
    transform: `translateX(${cfg.x}px) rotate(${cfg.rot}deg) scale(${cfg.scale})`,
    opacity: cfg.opacity,
    zIndex: cfg.z
  }
}

// ============ NAVIGATSIYA ============
let timer: ReturnType<typeof setInterval> | null = null

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % screens.value.length
}

const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + screens.value.length) % screens.value.length
}

const setActive = (i: number) => {
  if (i === activeIndex.value) return
  activeIndex.value = i
  resetTimer()
}

const setTab = (tab: TabId) => {
  if (tab === activeTab.value) return
  activeTab.value = tab
  // Tab almashganda — birinchi ekran markazga qaytsin, timer qayta boshlansin
  activeIndex.value = 0
  resetTimer()
}

const startTimer = () => {
  stopTimer()
  timer = setInterval(next, 3500)
}

const stopTimer = () => {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

const resetTimer = () => {
  stopTimer()
  startTimer()
}

// ============ SWIPE ============
let touchStartX = 0
let touchStartY = 0

const onTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
  if (dx < 0) next()
  else prev()
  resetTimer()
}

onMounted(() => startTimer())
onBeforeUnmount(() => stopTimer())
</script>

<style scoped>
/* ============ WRAPPER ============ */
.phone-fan-wrap {
  width: 560px;
  max-width: 100%;
  height: 640px;
  position: relative;
  margin: 0 auto;
}

/* ============ TAB SWITCHER ============ */
.tabs {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  gap: 4px;
  padding: 4px;
  background: var(--c-surface, #f1f5f9);
  border: 1px solid var(--c-border, #e2e8f0);
  border-radius: 12px;
  width: 220px;
}

.tab-btn {
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 600;
  font-size: 13px;
  color: var(--c-text-muted, #64748b);
  background: transparent;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}
.tab-btn:hover { color: var(--c-text, #0f172a); }

.tab-btn.active {
  background: var(--c-bg, #ffffff);
  color: #2563eb;
  box-shadow: var(--shadow-sm);
}

/* ============ FAN ============ */
.phone-fan {
  position: absolute;
  top: 64px;
  bottom: 60px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1400px;
}

.phones {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ============ PHONE ============ */
.phone {
  position: absolute;
  width: 230px;
  height: 470px;
  cursor: pointer;
  transition: all 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, opacity;
  transform-origin: center center;
}

.phone-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: #0f172a;
  border-radius: 38px;
  padding: 6px;
  box-shadow:
    inset 0 0 0 1.5px rgba(255, 255, 255, 0.07),
    0 18px 40px rgba(15, 23, 42, 0.22),
    0 30px 70px rgba(15, 23, 42, 0.14);
}

.phone.is-active .phone-frame {
  box-shadow:
    inset 0 0 0 1.5px rgba(255, 255, 255, 0.1),
    0 26px 60px rgba(37, 99, 235, 0.45),
    0 50px 100px rgba(29, 78, 216, 0.25),
    0 0 0 2px rgba(37, 99, 235, 0.18);
}

.phone-glow {
  position: absolute;
  inset: -30px;
  background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.28) 0%, transparent 60%);
  filter: blur(18px);
  z-index: -1;
  pointer-events: none;
}

.phone-notch {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 16px;
  background: #000;
  border-radius: 999px;
  z-index: 2;
}

.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 32px;
  padding: 30px 14px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ============ COMMON SCREEN ATOMS ============ */
.scn {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 11px;
  color: #0f172a;
  line-height: 1.4;
}

.scn-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.scn-header > span:last-child { width: 26px; height: 26px; }

.scn-back {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #f1f5f9;
  display: grid;
  place-items: center;
  color: #0f172a;
  flex-shrink: 0;
}

.scn-title {
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}
.scn-title-sm {
  font-size: 13.5px;
  margin-bottom: 0;
  flex: 1;
  text-align: center;
}

.scn-sub { font-size: 11px; color: #64748b; margin-bottom: 18px; line-height: 1.5; }
.scn-sub-tight { margin-bottom: 10px; }
.scn-sub strong { color: #0f172a; font-weight: 700; }

.scn-label {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 6px;
  letter-spacing: 0.02em;
}

.scn-btn {
  width: 100%;
  padding: 11px 0;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-radius: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.01em;
  margin-top: auto;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.32);
  cursor: default;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.scn-legal {
  font-size: 9.5px;
  color: #94a3b8;
  text-align: center;
  margin-top: 10px;
  line-height: 1.5;
}
.scn-legal a { color: #2563eb; font-weight: 600; }

/* ============ AUTH ============ */
.auth-logo {
  width: 48px;
  height: 48px;
  margin: 4px auto 14px;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  display: grid;
  place-items: center;
  color: #fff;
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 22px;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.35);
}
.auth-logo + .scn-title { text-align: center; }
.auth-logo ~ .scn-sub { text-align: center; }

.phone-row {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  border: 1px solid var(--c-border, #e2e8f0);
  border-radius: 10px;
  padding: 0 10px;
  background: #f8fafc;
  margin-bottom: 14px;
}
.phone-flag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding-right: 8px;
  border-right: 1px solid #e2e8f0;
  margin-right: 4px;
  height: 22px;
  font-weight: 600;
  font-size: 11.5px;
  color: #0f172a;
  cursor: default;
}
.phone-flag svg:first-child { border-radius: 2px; overflow: hidden; }
.phone-number {
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: 0.02em;
}

/* ============ OTP ============ */
.otp-boxes {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  margin-bottom: 14px;
}
.otp-box {
  height: 38px;
  border-radius: 9px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  display: grid;
  place-items: center;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #0f172a;
}
.otp-box.filled { background: #fff; border-color: #cbd5e1; }
.otp-box.current {
  border-color: #2563eb;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}
.otp-cursor { width: 1px; height: 14px; background: #2563eb; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }

.otp-timer {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  align-self: center;
  padding: 4px 10px;
  background: #fff7ed;
  color: #f97316;
  border-radius: var(--radius-full, 999px);
  font-weight: 700;
  font-size: 11px;
  margin-bottom: 14px;
  font-variant-numeric: tabular-nums;
}

/* ============ FORM (Cert / Pay) ============ */
.form-field { margin-bottom: 10px; }
.form-field label {
  display: block;
  font-size: 9.5px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}
.form-input {
  height: 36px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0 11px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  font-size: 11.5px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: 0.02em;
}
.form-input-phone { gap: 8px; }
.mini-flag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-right: 8px;
  border-right: 1px solid #e2e8f0;
  font-size: 10.5px;
  color: #0f172a;
}
.mini-flag svg { border-radius: 2px; overflow: hidden; }

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 10px;
  line-height: 1.45;
  color: #64748b;
  margin: 6px 0 12px;
}
.checkbox {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1.5px solid #cbd5e1;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  margin-top: 1px;
  background: #fff;
}
.checkbox.checked { background: #2563eb; border-color: #2563eb; color: #fff; }

/* ============ HOME (Shogird) ============ */
.scn-home, .scn-ustoz-home {
  padding-bottom: 0;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.home-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.home-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 11px;
  flex-shrink: 0;
}
.home-greet { flex: 1; display: flex; flex-direction: column; line-height: 1.2; }
.home-greet small { font-size: 9px; color: #94a3b8; }
.home-greet strong {
  font-family: 'Sora', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #0f172a;
}
.home-bell {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background: #f1f5f9;
  display: grid;
  place-items: center;
  color: #0f172a;
  cursor: default;
}
.bell-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f97316;
  border: 1.5px solid #f1f5f9;
}

.home-banner {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border: 1px solid #fed7aa;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}
.home-banner::after {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(249, 115, 22, 0.18);
}
.banner-text { display: flex; flex-direction: column; position: relative; z-index: 1; }
.banner-text strong {
  font-family: 'Sora', sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: #c2410c;
}
.banner-text span { font-size: 10.5px; color: #9a3412; font-weight: 600; }

.home-cta, .ustoz-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-radius: 14px;
  margin-bottom: 12px;
  text-align: left;
  cursor: default;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.3);
  position: relative;
  overflow: hidden;
}
.home-cta::after, .ustoz-cta::after {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 70%);
}
.cta-icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.cta-body { flex: 1; display: flex; flex-direction: column; line-height: 1.3; z-index: 1; min-width: 0; }
.cta-body strong {
  font-family: 'Sora', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cta-body small {
  font-size: 9.5px;
  opacity: 0.85;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cta-arrow { flex-shrink: 0; z-index: 1; }

.home-section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.home-section-row h6 {
  font-family: 'Sora', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #0f172a;
}
.home-section-row span { font-size: 10px; color: #2563eb; font-weight: 600; }

.order-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 11px;
  margin-bottom: 12px;
}
.order-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.order-num {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #0f172a;
}
.order-status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 9.5px;
  font-weight: 700;
  color: #f97316;
  background: #fff7ed;
  padding: 3px 7px;
  border-radius: var(--radius-full, 999px);
}
.dot-amber { width: 5px; height: 5px; border-radius: 50%; background: #f97316; }
.order-name {
  font-family: 'Sora', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #0f172a;
  margin-bottom: 2px;
}
.order-meta { font-size: 9.5px; color: #64748b; margin-bottom: 8px; }
.order-meta strong { color: #f97316; font-weight: 700; }
.order-bottom { display: flex; justify-content: space-between; align-items: center; }
.order-amount {
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: #0f172a;
}
.order-amount small { font-size: 9px; font-weight: 600; color: #64748b; margin-left: 2px; }
.order-btn {
  padding: 7px 14px;
  background: #2563eb;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 10.5px;
  cursor: default;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
}

.tabbar {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 4px;
  border-top: 1px solid #e2e8f0;
  background: #fff;
  margin-inline: -14px;
  padding-inline: 14px;
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  color: #94a3b8;
  font-weight: 600;
  font-size: 8.5px;
  cursor: default;
}
.tab.active { color: #2563eb; }

/* ============ PAYMENT ============ */
.pay-card {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(29, 78, 216, 0.35);
}
.pay-card::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
}
.pay-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; position: relative; z-index: 1; }
.pay-card-num { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.04em; }
.pay-card-chip { color: rgba(255, 255, 255, 0.7); }
.pay-card-amount {
  font-family: 'Sora', sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.pay-card-amount small { font-size: 12px; opacity: 0.8; font-weight: 600; margin-left: 2px; }
.pay-card-pan {
  font-family: 'Sora', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.18em;
  opacity: 0.85;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}
.pay-card-bottom { display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
.pay-card-bottom small { font-size: 9px; opacity: 0.75; }
.pay-brand {
  font-family: 'Sora', sans-serif;
  font-size: 12px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.04em;
}

/* ============ USTOZ HOME ============ */
.ustoz-welcome {
  background: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.ustoz-welcome strong {
  font-family: 'Sora', sans-serif;
  font-size: 12.5px;
  font-weight: 800;
  color: #1d4ed8;
  margin-bottom: 2px;
}
.ustoz-welcome small {
  font-size: 9.5px;
  color: #1e3a8a;
  line-height: 1.4;
}

.ustoz-section {
  font-family: 'Sora', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.ustoz-order {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 11px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}
.ustoz-order-mini { padding: 9px; margin-bottom: 10px; }

.ustoz-order-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }

.num-circle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #0f172a;
}
.num-circle svg {
  width: 18px;
  height: 18px;
  padding: 4px;
  border-radius: 50%;
  background: #dcfce7;
  color: #16a34a;
}

.badge-pending {
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 700;
  color: #f97316;
  background: #fff7ed;
  padding: 3px 7px;
  border-radius: var(--radius-full, 999px);
  border: 1px solid #fed7aa;
}

.ustoz-amount {
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}
.ustoz-amount small { font-size: 10px; font-weight: 600; color: #64748b; margin-left: 3px; }

.ustoz-row { font-size: 9.5px; color: #64748b; line-height: 1.6; }
.ustoz-row strong { color: #0f172a; font-weight: 700; }
.ustoz-row .paid { color: #22c55e; font-weight: 700; }

.ustoz-msg {
  margin-top: 6px;
  margin-bottom: 8px;
  padding: 6px 9px;
  background: #f8fafc;
  border-left: 2px solid #2563eb;
  border-radius: 0 6px 6px 0;
  font-size: 9.5px;
  font-style: italic;
  color: #475569;
  line-height: 1.4;
}

.ustoz-confirm {
  width: 100%;
  padding: 9px 0;
  background: #22c55e;
  color: #fff;
  border-radius: 9px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: default;
  box-shadow: 0 6px 14px rgba(34, 197, 94, 0.32);
}

/* ============ INFO BANNER (Ustoz confirm/cert review) ============ */
.info-banner {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 8px 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 9.5px;
  color: #475569;
  line-height: 1.4;
}
.info-banner svg { color: #2563eb; flex-shrink: 0; margin-top: 1px; }

/* ============ SIGNATURE ============ */
.signature-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.sig-title {
  font-family: 'Sora', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #0f172a;
}
.sig-clear {
  font-size: 9.5px;
  font-weight: 600;
  color: #2563eb;
  cursor: default;
}

.signature-pad {
  height: 90px;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 6px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signature-pad svg { width: 100%; height: 100%; }

.sig-hint {
  font-size: 9px;
  color: #94a3b8;
  margin-bottom: 12px;
  text-align: center;
}

/* ============ CERTIFICATE BLOCK ============ */
.cert-block {
  background: #fffdf0;
  border: 1px solid #d4a853;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 10px;
  position: relative;
}

.cert-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Sora', sans-serif;
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #92400e;
  margin-bottom: 4px;
}
.cert-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #2563eb;
}

.cert-big {
  font-family: 'Sora', sans-serif;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-align: center;
  color: #0f172a;
  margin-bottom: 8px;
}

.cert-greeting {
  text-align: center;
  font-size: 9px;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.4;
}
.cert-greeting strong {
  display: block;
  font-family: 'Sora', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  color: #2563eb;
  margin-top: 2px;
  letter-spacing: 0.04em;
}

.cert-text {
  font-size: 7.5px;
  color: #64748b;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 8px;
  padding: 0 4px;
}

.cert-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 6px;
}
.cert-sign-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
}
.cert-sign-svg {
  width: 80px;
  height: 22px;
  margin-bottom: 2px;
  border-bottom: 1px solid #cbd5e1;
}
.cert-sign-svg svg { width: 100%; height: 100%; }
.cert-sign-col strong {
  font-family: 'Sora', sans-serif;
  font-size: 8px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.cert-qr {
  flex-shrink: 0;
  padding: 2px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.cert-meta {
  display: flex;
  flex-direction: column;
  font-size: 6.5px;
  color: #92400e;
  line-height: 1.5;
  border-top: 1px dashed #d4a853;
  padding-top: 4px;
}
.cert-meta span:first-child { font-weight: 700; letter-spacing: 0.06em; }

/* ============ APPROVE / REJECT ============ */
.action-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: auto;
}
.reject-btn, .approve-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 0;
  border-radius: 10px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  cursor: default;
}
.reject-btn { background: #ef4444; box-shadow: 0 6px 14px rgba(239, 68, 68, 0.3); }
.approve-btn { background: #22c55e; box-shadow: 0 6px 14px rgba(34, 197, 94, 0.32); }

/* ============ DOTS ============ */
.dots {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  z-index: 10;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full, 999px);
  background: var(--c-border, #cbd5e1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}
.dot:hover { background: var(--c-text-muted, #94a3b8); }
.dot.active {
  width: 26px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

/* ============ DARK THEME ============ */
:root[data-theme='dark'] .phone-frame {
  box-shadow:
    inset 0 0 0 1.5px rgba(255, 255, 255, 0.1),
    0 18px 40px rgba(0, 0, 0, 0.5),
    0 30px 70px rgba(0, 0, 0, 0.4);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .phone-fan-wrap { width: 480px; height: 600px; }
  .phone-fan {
    transform: scale(0.85);
    transform-origin: top center;
  }
}

@media (max-width: 768px) {
  .phone-fan-wrap { width: 100%; max-width: 420px; height: 540px; }
  .phone-fan {
    transform: scale(0.72);
    transform-origin: top center;
  }
  .dots { bottom: 8px; }
}

@media (max-width: 480px) {
  .phone-fan-wrap { height: 480px; }
  .phone-fan { transform: scale(0.58); }
}

@media (max-width: 380px) {
  .phone-fan-wrap { height: 440px; }
  .phone-fan { transform: scale(0.5); }
  .tabs { width: 200px; }
  .tab-btn { font-size: 12px; padding: 7px 10px; }
}
</style>

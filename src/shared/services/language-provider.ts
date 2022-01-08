interface LanguageDetails {
    nativeName?: string;
    langKey?: string;
}

export const PaLanguageSupport = {
    en: { nativeName: 'English', langKey: 'English' },
    hi: { nativeName: 'Hindi', langKey: 'हिंदी' }
};

export function LanguageProvider(langKey: string): LanguageDetails {
    switch (langKey) {
        case 'en':
            return PaLanguageSupport.en;
        case 'hi':
            return PaLanguageSupport.hi;
        default:
            return PaLanguageSupport.en;
    }
}
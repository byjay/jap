/**
 * api_client.js
 * Wrapper for communicating with the Docker Python Backend
 */

const API_BASE_URL = 'https://japbong-production.up.railway.app/api';

const ApiClient = {
    /**
     * Generic fetcher
     */
    async get(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to fetch ${endpoint}:`, error);
            // Fallback strategy could be implemented here (e.g. load from local cache)
            return null;
        }
    },

    async post(endpoint, data) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to post to ${endpoint}:`, error);
            return null;
        }
    },

    /**
     * Domain specific methods
     */

    // Conversations
    async getConversationCategories() {
        return await this.get('/conversations');
    },

    async getConversationDetail(categoryId) {
        return await this.get(`/conversations/${categoryId}`);
    },

    // Word Study
    async getWordCategories() {
        return await this.get('/words');
    },

    async getWordDetail(categoryId) {
        return await this.get(`/words/${categoryId}`);
    },

    // Progress
    async saveProgress(userId, progressData) {
        return await this.post('/learning/progress', { userId, ...progressData });
    },

    // Dictionary Scraper (Future)
    async searchDictionary(query) {
        return await this.get(`/dictionary/search?q=${encodeURIComponent(query)}`);
    },

    // Conversation Generation (AI)
    async generateWordConversation(word) {
        return await this.post('/generate/conversation', { word });
    },

    // Grammar Practice (AI)
    async transformSentence(sentence, targetForm) {
        return await this.post('/practice/transform', { sentence, target_form: targetForm });
    },

    async checkSentence(words, userSentence) {
        return await this.post('/practice/check', { words, user_sentence: userSentence });
    },

    // Sentence Generation (AI) - Word to Example Sentences
    async generateWordSentences(word) {
        return await this.post('/generate/sentences', { word });
    }
};

// Export for usage
window.ApiClient = ApiClient;

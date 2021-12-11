export function MemberFeedback({ 
    articleUrl,
    mediaUrl,
    feedbackMessage,
    memberName,
    memberRole,
    memberOrganization
 }) {
    this.articleUrl = articleUrl || '';
    this.mediaUrl = mediaUrl || '';
    this.feedbackMessage = feedbackMessage || '';
    this.memberName = memberName || '';
    this.memberRole = memberRole || '';
    this.memberOrganization = memberOrganization || '';
}

MemberFeedback.prototype.specialty = "none";
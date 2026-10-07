/**
 * NEXORA — Social Media Management Module Contracts
 */

import type { BaseEntity, ID } from '../../types/common';

export type SocialPlatform = 'twitter_x' | 'linkedin' | 'facebook' | 'instagram' | 'tiktok' | 'youtube';

export interface SocialAccount extends BaseEntity {
  organizationId: ID;
  platform: SocialPlatform;
  accountHandle: string;
  isActive: boolean;
}

export interface ScheduledPost extends BaseEntity {
  organizationId: ID;
  targetPlatforms: SocialPlatform[];
  content: string;
  mediaUrls: string[];
  scheduledFor: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
}

export interface ISocialService {
  listAccounts(orgId: ID): Promise<SocialAccount[]>;
  listScheduledPosts(orgId: ID): Promise<ScheduledPost[]>;
}

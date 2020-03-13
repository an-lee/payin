# frozen_string_literal: true

# == Schema Information
#
# Table name: multisign_account_members
#
#  id                   :uuid             not null, primary key
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  multisign_account_id :uuid
#  user_id              :uuid
#
# Indexes
#
#  index_multisign_account_members_on_multisign_account_id  (multisign_account_id)
#  index_multisign_account_members_on_user_id               (user_id)
#
class MultisignAccountMember < ApplicationRecord
  belongs_to :user
  belongs_to :multisign_account
end
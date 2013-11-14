module UUIDHelper
  def self.included(base)
    base.instance_eval do

        def set_uuid
            self.id = UUID.new.generate
        end

      attr_readonly :id
      before_create :set_uuid
    end
  end
end


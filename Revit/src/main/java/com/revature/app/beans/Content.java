package com.revature.app.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD

@Entity
=======
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="post_content")
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
public class Content {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer contentId;
<<<<<<< HEAD
<<<<<<< HEAD
	@Column(name = "post_id")
	private Integer postId;
=======
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
	@Column(name = "post_date")
=======
	@Column(name = "post_date", insertable = false)
>>>>>>> c176e0e1bd88c9db50ac0c1dd470e56cd3773fc7
	private Long postDate;
	@Column(name = "enabled", insertable = false)
	private Boolean enabled;
	private String message;
	private String image;
	
	public Content() {
		this.contentId = 0;
<<<<<<< HEAD
		this.postId = 0;
=======
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
		this.postDate = null;
		this.enabled = false;
		this.image = "";
		this.message="";
	
	}
	public Integer getContentId() {
		return contentId;
	}
	public void setContentId(Integer contentId) {
		this.contentId = contentId;
	}
<<<<<<< HEAD
	public Integer getPostId() {
		return postId;
	}
	public void setPostId(Integer postId) {
		this.postId = postId;
	}
=======
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
	public Long getPostDate() {
		return postDate;
	}
	public void setPostDate(Long postDate) {
		this.postDate = postDate;
	}
	public Boolean getEnabled() {
		return enabled;
	}
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((contentId == null) ? 0 : contentId.hashCode());
		result = prime * result + ((enabled == null) ? 0 : enabled.hashCode());
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((postDate == null) ? 0 : postDate.hashCode());
<<<<<<< HEAD
		result = prime * result + ((postId == null) ? 0 : postId.hashCode());
=======
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Content other = (Content) obj;
		if (contentId == null) {
			if (other.contentId != null)
				return false;
		} else if (!contentId.equals(other.contentId))
			return false;
		if (enabled == null) {
			if (other.enabled != null)
				return false;
		} else if (!enabled.equals(other.enabled))
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (postDate == null) {
			if (other.postDate != null)
				return false;
		} else if (!postDate.equals(other.postDate))
			return false;
<<<<<<< HEAD
		if (postId == null) {
			if (other.postId != null)
				return false;
		} else if (!postId.equals(other.postId))
			return false;
=======
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
		return true;
	}
	@Override
	public String toString() {
<<<<<<< HEAD
		return "Content [contentId=" + contentId + ", postId=" + postId + ", postDate=" + postDate + ", enabled="
				+ enabled + ", message=" + message + ", image=" + image + "]";
	}
	
	
=======
		return "Content [contentId=" + contentId + ", postDate=" + postDate + ", enabled="
				+ enabled + ", message=" + message + ", image=" + image + "]";
	}
		
>>>>>>> 24230aa5963ae97384957caea8a193b4a53afcf8
}
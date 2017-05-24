<li class="job_listing">
    <div class="title">
        <span class="designation">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            <br><a href="<?php the_permalink(); ?>"><?php the_excerpt(); ?></a></p>
        </span>
    </div>
<div class="location">
  <?php $terms = get_the_terms(get_the_ID(),'join-us');?>
  <?php $skills_links = wp_list_pluck($terms, 'name');
        $skills_yo = implode(", ", $skills_links);?>
    <?php echo $skills_yo; ?>
</div>
    <div class="create"><?php the_time('Y/m/d'); ?></div>
    <div class="apply">
      <a href="mailto:joinus@kyligence.io" style="border-radius: 25px;padding:7px 20px; background-color: #76aede;color:black;">
       	<?php if(ICL_LANGUAGE_CODE=='en'): ?>
		APPLY
		<?php elseif(ICL_LANGUAGE_CODE=='zh'): ?>
		应用
		<?php endif; ?>
      </a>
    </div>
</li>
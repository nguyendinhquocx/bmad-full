#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const packageJson = require('../package.json');

program
  .name('bmad-vn')
  .description('BMad Method CLI - Vietnamese version')
  .version(packageJson.version);

program
  .command('create <project-name>')
  .description('Tạo dự án mới với BMad Method')
  .action(async (projectName) => {
    try {
      const targetPath = path.resolve(process.cwd(), projectName);
      
      console.log(chalk.blue('🚀 Đang tạo dự án BMad Method...'));
      console.log(chalk.gray(`📁 Tại: ${targetPath}`));
      
      // Kiểm tra xem folder đã tồn tại chưa
      if (await fs.pathExists(targetPath)) {
        console.log(chalk.red(`❌ Thư mục "${projectName}" đã tồn tại!`));
        process.exit(1);
      }
      
      // Tạo thư mục project
      await fs.ensureDir(targetPath);
      
      // Copy template files
      const templatePath = path.join(__dirname, '../templates');
      await copyTemplate(templatePath, targetPath);
      
      console.log(chalk.green('✅ Tạo dự án thành công!'));
      console.log(chalk.yellow('\n📝 Bước tiếp theo:'));
      console.log(chalk.white(`   cd ${projectName}`));
      console.log(chalk.white('   claude'));
      console.log(chalk.white('   /analyst'));
      console.log(chalk.gray('\n💡 Bắt đầu với Analyst agent để phân tích yêu cầu!'));
      
    } catch (error) {
      console.error(chalk.red('❌ Lỗi khi tạo dự án:'), error.message);
      process.exit(1);
    }
  });

program
  .command('init')
  .description('Khởi tạo BMad Method trong thư mục hiện tại')
  .action(async () => {
    try {
      const targetPath = process.cwd();
      
      console.log(chalk.blue('🚀 Đang khởi tạo BMad Method...'));
      console.log(chalk.gray(`📁 Tại: ${targetPath}`));
      
      // Kiểm tra xem đã có .claude hoặc .bmad-core chưa
      const claudeExists = await fs.pathExists(path.join(targetPath, '.claude'));
      const bmadExists = await fs.pathExists(path.join(targetPath, '.bmad-core'));
      
      if (claudeExists || bmadExists) {
        console.log(chalk.yellow('⚠️  BMad Method đã được khởi tạo trong thư mục này!'));
        process.exit(0);
      }
      
      // Copy template files
      const templatePath = path.join(__dirname, '../templates');
      await copyTemplate(templatePath, targetPath);
      
      console.log(chalk.green('✅ Khởi tạo thành công!'));
      console.log(chalk.yellow('\n📝 Bước tiếp theo:'));
      console.log(chalk.white('   claude'));
      console.log(chalk.white('   /analyst'));
      console.log(chalk.gray('\n💡 Bắt đầu với Analyst agent để phân tích yêu cầu!'));
      
    } catch (error) {
      console.error(chalk.red('❌ Lỗi khi khởi tạo:'), error.message);
      process.exit(1);
    }
  });

async function copyTemplate(templatePath, targetPath) {
  try {
    // Copy .claude folder
    const claudeSource = path.join(templatePath, '.claude');
    const claudeTarget = path.join(targetPath, '.claude');
    await fs.copy(claudeSource, claudeTarget);
    console.log(chalk.gray('   📋 Đã copy .claude/'));
    
    // Copy .bmad-core folder  
    const bmadSource = path.join(templatePath, '.bmad-core');
    const bmadTarget = path.join(targetPath, '.bmad-core');
    await fs.copy(bmadSource, bmadTarget);
    console.log(chalk.gray('   📋 Đã copy .bmad-core/'));
    
    // Copy README.md
    const readmeSource = path.join(templatePath, 'README.md');
    const readmeTarget = path.join(targetPath, 'README.md');
    await fs.copy(readmeSource, readmeTarget);
    console.log(chalk.gray('   📋 Đã copy README.md'));
    
  } catch (error) {
    throw new Error(`Không thể copy template files: ${error.message}`);
  }
}

program.parse();